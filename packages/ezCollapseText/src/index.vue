<template>
  <div class="ez-collapse-text" v-bind="$attrs">
    <div v-show="!selfExpand">
      <span class="text">{{
        text.length > limit ? `${text.substring(0, limit)}...` : text
      }}</span>
      <el-button
        type="text"
        v-if="text.length > limit"
        @click="expandClick(true)"
        class="unfold-btn"
      >
        <slot name="unfold">展开</slot>
      </el-button>
    </div>
    <div v-show="selfExpand">
      <span class="text">{{ text }}</span>
      <el-button
        type="text"
        v-if="text.length > limit"
        @click="expandClick(false)"
        class="fold-btn"
      >
        <slot name="fold">收起</slot>
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ezCollapseText",
  props: {
    expand: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    },
    limit: {
      type: Number,
      default: 10,
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
.ez-collapse-text {
  width: 250px;
  font-size: 14px;
  line-height: 1.5em;
  word-break: break-all;
}

.ez-collapse-text .el-button--text {
  padding: 0;
  font-size: inherit;
  padding-left: 5px;
  height: auto;
}
</style>