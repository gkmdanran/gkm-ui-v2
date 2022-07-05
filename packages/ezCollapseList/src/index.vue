<template>
  <div class="ez-collapse-list" v-bind="$attrs">
    <div
      class="collapse-item"
      v-for="(item, index) in data"
      :key="index"
      v-show="selfExpand || (!selfExpand && index < limit)"
    >
      <slot :row="item" :index="index">{{ item }}</slot>
      <div
        class="btns"
        v-if="
          data.length > limit &&
          ((selfExpand && index === data.length - 1) ||
            (!selfExpand && index === limit - 1))
        "
      >
        <el-button v-show="!selfExpand" type="text" @click="expandClick(true)" class="unfold-btn">
          <slot name="unfold">展开</slot>
        </el-button>
        <el-button type="text" v-show="selfExpand" @click="expandClick(false)" class="fold-btn">
          <slot name="fold">收起</slot>
        </el-button>
      </div>
    </div>
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
      this.$emit("change", type);
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
<style scoped>
.ez-collapse-list {
  font-size: 14px;
  line-height: 1.5em;
}

.ez-collapse-list .el-button--text {
  padding: 0;
  margin: 0;
  font-size: inherit;
  height: auto;
}

.collapse-item {
  display: flex;
  align-items: center;
}

.btns {
  margin-left: 5px;
}
</style>