<template>
  <span class="icon-ez-box" :style="{ color: color, fontSize: fontSize }">
    <i v-if="elIcon" class="icon icon-ez" :class="name"></i>
    <svg class="icon icon-ez" aria-hidden="true" v-else>
      <use :xlink:href="`#${name}`"></use>
    </svg>
  </span>
</template>
<script>
export default {
  name: "ezIcon",
  props: {
    elIcon: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
    color: {
      type: String,
      default: "#959595",
    },
    fontSize: {
      type: String,
      default: "14px",
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
