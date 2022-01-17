<template>
  <div class="ez-upload">
    <el-upload
      ref="elUpload"
      :class="{ hide: hideUpload }"
      :file-list="fileList"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-progress="handleProgress"
      :on-change="handleChange"
      :on-exceed="handleExceed"
      :before-upload="handelBeforeUpload"
      :before-remove="handleBeforeRemove"
      v-bind="$attrs"
    >
      <template #trigger>
        <slot name="trigger"></slot>
      </template>
      <template #tip>
        <slot name="tip"></slot>
      </template>
      <slot></slot>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible" width="600px">
      <img width="100%" :src="currentUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "ezUpload",
  inheritAttrs: false,
  props: {
    extensions: {
      type: Array,
    },
    fileList: {
      type: Array,
      default: () => [],
    },
    fileSize: {
      type: String,
    },
    showPreviewDialog: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      dialogVisible: false,
      hideUpload: false,
      currentUrl: "",
    };
  },
  methods: {
    handlePreview(file) {
      this.currentUrl = file.url;
      if (this.showPreviewDialog) {
        this.dialogVisible = true;
      }
      this.$emit("preview", file);
    },
    handleRemove(file, fileList) {
      this.hideUpload = fileList.length >= this.$attrs.limit;
      this.$emit("remove", file, fileList);
    },
    handleSuccess(response, file, fileList) {
      this.$emit("success", response, file, fileList);
    },
    handleError(err, file, fileList) {
      this.$message({
        type: "error",
        message: `文件上传失败!`,
      });
      this.$emit("error", err, file, fileList);
    },
    handleProgress(event, file, fileList) {
      this.$emit("progress", event, file, fileList);
    },
    handleChange(file, fileList) {
      if (this.$attrs["auto-upload"] == false) {
        if (
          !this.validityExtensions(file.name) ||
          !this.validityFileSize(file.size)
        ) {
          fileList.pop();
          this.hideUpload = fileList.length >= this.$attrs.limit;
          return false;
        }
      }
      this.hideUpload = fileList.length >= this.$attrs.limit;
      this.$emit("change", file, fileList);
    },
    handleExceed(file, fileList) {
      this.$message({
        type: "warning",
        message: `最多上传${this.$attrs.limit}个文件`,
      });
      this.$emit("exceed", file, fileList);
    },
    handelBeforeUpload(file) {
      if (!this.validityExtensions(file.name)) {
        return false;
      }
      if (!this.validityFileSize(file.size)) {
        return false;
      }
      this.$emit("beforeUpload", file);
    },
    handleBeforeRemove(file, fileList) {
      this.$emit("beforeRemove", file, fileList);
    },

    clearFiles() {
      this.$refs.elUpload.clearFiles();
      this.hideUpload = false;
    },
    abort(file) {
      this.$refs.elUpload.abort(file);
    },
    submit() {
      this.$refs.elUpload.submit();
    },

    //校验格式
    validityExtensions(fileName) {
      let ext = fileName.substr(fileName.lastIndexOf(".") + 1);
      if (this.extensions && !this.extensions.includes(ext)) {
        this.$message({
          type: "warning",
          message: `请上传文件后缀名为：${this.extensions.join("、")}的文件`,
        });
        return false;
      }
      return true;
    },
    //校验大小
    validityFileSize(fileSize) {
      if (this.fileSize) {
        let typeList = ["kb", "mb", "gb"];
        let type = this.fileSize.substring(this.fileSize.length - 2) || "";
        let number = this.fileSize.replace(type, "");
        let index = typeList.indexOf(type);
        if (index == -1 || !number) throw new Error("wrong fileSize");
        let size = number * Math.pow(1024, index + 1);
        if (size < fileSize) {
          this.$message({
            type: "warning",
            message: `文件大小不能超过${this.fileSize}`,
          });
          return false;
        }
      }
      return true;
    },
  },
  watch: {
    fileList: {
      handler(v) {
        this.hideUpload = v.length >= this.$attrs.limit;
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
<style lang="less" scoped>
.ez-upload {
  .hide {
    /deep/ .el-upload--picture-card {
      display: none !important;
    }
  }
  /deep/ .el-dialog {
    margin: 0 !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  /deep/ .el-dialog__body {
    padding: 0;
  }
  /deep/ .el-dialog__header {
    padding: 0;
  }
  /deep/ .el-dialog__close {
    font-size: 24px;
    font-weight: 700;
    color: red;
  }
  img {
    vertical-align: middle;
  }
}
</style>