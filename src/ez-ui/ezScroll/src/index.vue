<template>
  <el-scrollbar class="ez-scroll" style="width: 100%; height: 100%">{{activeTab}}
    <el-tabs style="height: 200px" v-model="activeTab">
      <el-tab-pane label="用户管理" name="a">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="b">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="c">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="d">定时任务补偿</el-tab-pane>
    </el-tabs>
  </el-scrollbar>
</template>

<script>
export default {
  name: "ezScroll",
  props: {},
  components: {},
  data() {
    return {
        activeTab:'a'
    };
  },

  methods: {},
};
</script>
<style lang="less" scoped>
.ez-scroll {
  /deep/ .el-scrollbar__wrap {
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>