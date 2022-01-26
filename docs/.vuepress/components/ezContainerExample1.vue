<template>
  <div class="content">
    <ez-container
      @back="handleBack"
      style="height: 100%"
      icon="el-icon-d-arrow-left"
      backText="返回主页"
      title="用户列表"
    >
      <div style="height: 200px">vue</div>
      <div style="height: 200px">react</div>
      <div style="height: 200px">node</div>
      <div style="height: 200px">webpack</div>
    </ez-container>
  </div>
</template>

<script>
export default {
  name: "ezContainerExample1",
  data() {
    return {};
  },
  methods: {
    handleBack() {
      alert("back");
    },
  },
};
</script>
<style  scoped>
.content {
  height: 400px;
  padding: 20px;
  margin: 10px 0;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  background-color: #e7eaed;
}
</style>