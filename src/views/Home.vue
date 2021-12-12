<template>
  <div class="home">
    <ez-upload
      ref="up"
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-change="handleChange"
      :limit="2"
      :fileList="[
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ]"
      :auto-upload="false"
      :extensions="['jpg']"
    >
      <i class="el-icon-plus"></i>
    </ez-upload>
    <button @click="clear()">qing</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      fileList: [],
    };
  },
  created() {},
  methods: {
    handleChange() {
      console.log("change");
    },
    clear() {
      this.$refs.up.clearFiles();
    },
    handleExceed(file, fileList) {
      console.log(file, fileList);
    },
  },
};
</script>
