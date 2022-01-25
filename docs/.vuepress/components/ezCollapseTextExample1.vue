<template>
  <div class="content">
    <ez-collapse-text
      style="width: 100px"
      :text="'JS是一种具有函数优先的轻量级，解释型或即时编译型的编程语言'"
      :limit="10"
      :expand="true"
    >
    </ez-collapse-text>
  </div>
</template>

<script>
export default {
  name: "ezCollapseTextExample1",
  data() {
    return {};
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