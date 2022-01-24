<template>
  <div class="content">
    <ez-button
      :confirm="{ message: '确认删除此数据吗?' }"
      type="primary"
      @confirmClick="handleConfirClick"
      @cancelClick="handleCancelClick"
      >删除数据</ez-button
    >
    <ez-button
      :confirm="{
        message: '即将跳转至百度',
        type: 'info',
        confirmText: '去百度',
        cancelText: '不想去',
      }"
      @confirmClick="handleConfirClick"
      @cancelClick="handleCancelClick"
      type="text"
      >跳转网页</ez-button
    >
  </div>
</template>

<script>
export default {
  name: "ezButtonExample2",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    handleConfirClick() {
      console.log("确认弹窗");
    },
    handleCancelClick() {
      console.log("取消弹窗");
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