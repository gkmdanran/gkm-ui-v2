<template>
  <div class="content">
    <ez-button loading>测试按钮</ez-button>
    <ez-button type="text">测试按钮</ez-button>
    <ez-button type="danger">测试按钮</ez-button>
    <ez-button type="danger" icon="el-icon-delete" circle></ez-button>
  </div>
</template>

<script>
  export default {
    name: "ezButtonExample1",
    components: {},
    data() {
      return {};
    },
    created() { },
    methods: {},
  };
</script>
<style scoped>
  .content {
    padding: 20px;
    margin: 10px 0;
    border: 1px solid #ebebeb;
    border-radius: 10px;
  }
</style>