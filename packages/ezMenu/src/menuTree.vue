<template>
  <el-submenu
    v-if="
      menu[(treeProps && treeProps.children) || 'children'] &&
      menu[(treeProps && treeProps.children) || 'children'].length > 0
    "
    v-bind="menu.attributes"
    :index="String(menu[(treeProps && treeProps.id) || 'id'] || '')"
  >
    <template slot="title">
      <i :class="menu[(treeProps && treeProps.icon) || 'icon']"></i>
      <span>{{ menu[(treeProps && treeProps.name) || "name"] || "" }}</span>
    </template>
    <menu-tree
      v-for="(item, index) in menu[
        (treeProps && treeProps.children) || 'children'
      ] || []"
      :tree-props="treeProps"
      :key="index"
      :menu="item"
      :parent-path="
        parentPath + (menu[(treeProps && treeProps.path) || 'path'] || '')
      "
      @clickMenuItem="$emit('clickMenuItem', $event)"
    ></menu-tree>
  </el-submenu>
  <el-menu-item
    v-else
    v-bind="menu.attributes"
    :index="parentPath + (menu[(treeProps && treeProps.path) || 'path'] || '')"
    @click="$emit('clickMenuItem', menu)"
  >
    <i :class="menu[(treeProps && treeProps.icon) || 'icon']"></i>
    <span slot="title">{{
      menu[(treeProps && treeProps.name) || "name"] || ""
    }}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: "menuTree",
  props: {
    menu: {
      type: Object,
      default: () => {},
    },
    treeProps: {
      type: Object,
    },
    parentPath: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>