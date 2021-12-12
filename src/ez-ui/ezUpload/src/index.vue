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
      :http-request="handelRequest"
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
      this.dialogVisible = true;
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
      this.$emit("error", err, file, fileList);
    },
    handleProgress(event, file, fileList) {
      this.$emit("progress", event, file, fileList);
    },
    handleChange(file, fileList) {
      if (this.$attrs["auto-upload"] == false) {
        let ext = file.name.substr(file.name.lastIndexOf(".") + 1);
        if (this.extensions && !this.extensions.includes(ext)) {
          this.$message({
            type: "warning",
            message: "文件格式错误！",
          });
          fileList.pop();
        }
      }
      this.hideUpload = fileList.length >= this.$attrs.limit;
      this.$emit("change", file, fileList);
    },
    handleExceed(file, fileList) {
      this.$emit("exceed", file, fileList);
    },
    handelBeforeUpload(file) {
      let ext = file.name.substr(file.name.lastIndexOf(".") + 1);
      if (this.extensions && !this.extensions.includes(ext)) {
        this.$message({
          type: "warning",
          message: "文件格式错误！",
        });
        return false;
      }
      this.$emit("beforeUpload", file);
    },
    handleBeforeRemove(file, fileList) {
      this.$emit("beforeRemove", file, fileList);
    },
    handelRequest() {
      this.$emit("request");
    },

    clearFiles() {
      this.$refs.elUpload.clearFiles();
      this.hideUpload = false;
    },
    abort() {
      this.$refs.elUpload.abort();
    },
    submit() {
      this.$refs.elUpload.submit();
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