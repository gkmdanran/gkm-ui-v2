<template>
  <div class="content">
    <ez-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      @change="handleChange"
      :auto-upload="false"
      :extensions="['jpg', 'png']"
      fileSize="500kb"
      multiple
      :limit="3"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </ez-upload>
  </div>
</template>

<script>
export default {
  name: "ezUploadExample1",
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
    };
  },
  methods: {
    handleChange(file, fileList) {
      console.log(file, fileList);
    },
  },
};
</script>
<style  scoped>
.content {
  padding: 20px;
  margin: 10px 0;
  border: 1px solid #ebebeb;
  border-radius: 10px;
}
</style>
