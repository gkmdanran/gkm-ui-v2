<template>
  <div>
    <ez-button
      confirm="确认删除吗？"
      type="danger"
      @confirmClick="confirmDel"
      @cancelClick="cancelDel"
      >删除</ez-button
    >
    <ez-button
      :confirm="{
        message: '确认删除吗',
        title: '提示',
        type: 'info',
        confirmText: '确认删除',
        cancelText: '我再想想',
      }"
      icon="el-icon-delete"
      circle
      type="danger"
      @confirmClick="confirmDel"
      @cancelClick="cancelDel"
    />
  </div>
</template>
<script>
export default {
  methods: {
    confirmDel() {
      console.log("删除成功");
    },
    cancelDel() {
      console.log("已取消");
    },
  },
};
</script>

