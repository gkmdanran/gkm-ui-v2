<template>
  <div class="ez-collpase-list" v-bind="$attrs">
    <div
      class="collapse-item"
      v-for="(item, index) in data"
      :key="index"
      v-show="selfExpand || (!selfExpand && index < limit)"
    >
      <slot :item="item" :index="index">{{ item }}</slot>
    </div>
    <el-button
      type="text"
      v-if="!selfExpand && data.length > limit"
      @click="expandClick(true)"
      >...展开</el-button
    >
    <el-button
      type="text"
      v-if="selfExpand && data.length > limit"
      @click="expandClick(false)"
      >收起</el-button
    >
  </div>
</template>

<script>
export default {
  name: "ezCollapseList",
  props: {
    expand: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      default: () => [],
    },
    limit: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      selfExpand: false,
    };
  },
  methods: {
    expandClick(type) {
      this.selfExpand = type;
    },
  },
  watch: {
    expand: {
      handler(v) {
        this.selfExpand = v;
      },
      immediate: true,
    },
  },
};
</script>
<style lang="less" scoped>
.ez-collpase-list {
  width: 250px;
  font-size: 14px;
  line-height: 1.5em;
  word-break: break-all;
  .el-button--text {
    padding: 0;
    font-size: inherit;
  }
}
</style>