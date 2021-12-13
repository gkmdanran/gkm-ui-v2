<template>
  <el-menu class="ez-menu" ref="elMenu" v-bind="$attrs" v-on="$listeners">
    <menu-tree
      parentPath=""
      v-for="(item, index) in menuJson.menus"
      :tree-props="menuJson.treeProps"
      :key="index"
      :menu="item"
    ></menu-tree>
  </el-menu>
</template>

<script>
import menuTree from "./menuTree.vue";
export default {
  name: "ezMenu",
  props: {
    menuJson: {
      type: Object,
      required: true,
    },
  },
  components: {
    menuTree,
  },
  data() {
    return {};
  },
  methods: {
    open(index) {
      this.$refs.open(index);
    },
    close(index) {
      this.$refs.close(index);
    },
  },
};
</script>
<style lang="less" scoped>
</style>