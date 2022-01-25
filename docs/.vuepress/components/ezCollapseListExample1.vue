<template>
  <div class="content">
    <ez-collapse-list :data="list" :limit="2" :expand="true">
      <template #default="scope">
        <span style="color: blue">{{ scope.index }}</span>
        <span style="color: #ccc">{{ scope.item.name }}</span>
        <span style="color: red">{{ scope.item.age }}</span>
      </template>
    </ez-collapse-list>
  </div>
</template>

<script>
export default {
  name: "ezCollapseListExample1",
  data() {
    return {
      list: [
        { name: "小明", age: 10 },
        { name: "小红", age: 12 },
        { name: "小刚", age: 13 },
      ],
    };
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