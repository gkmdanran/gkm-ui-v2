<template>
  <div class="test-container">
    <ez-container scroll title="容器" style="height: 600px">
      <div style="height: 500px">test1</div>
      <div style="height: 500px">test2</div>
    </ez-container>
    <ez-container
      :scroll="false"
      title="容器2"
      style="height: 600px"
      @back="handelBack"
    >
      <div style="height: 100%">test3</div>
    </ez-container>
  </div>
</template>
<script>
export default {
  methods: {
    handelBack() {
      console.log("back");
    },
  },
};
</script>
<style scoped>
.test-container {
  background: #cccccc;
  padding: 20px;
  box-sizing: border-box;
}
</style>

