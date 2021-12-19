<template>
  <el-menu
    class="ez-menu"
    ref="elMenu"
    v-bind="$attrs"
    v-on="$listeners"
    :default-active="activeNow"
  >
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
  computed: {
    activeNow() {
      return this.$route.path;
    },
  },
  methods: {
    open(index) {
      this.$refs.elMenu.open(index);
    },
    close(index) {
      this.$refs.elMenu.close(index);
    },
  },
};
</script>
<style lang="less" scoped>
.ez-menu {
  overflow-x: hidden;
  /deep/ .el-menu-item.is-active {
    background-color: #12304c !important;
  }
}
</style>