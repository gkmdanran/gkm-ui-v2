<template>
  <span class="ez-icon" :style="{ color: color, fontSize: fontSize }">
    <i v-if="builtIn" class="icon" :class="name"></i>
    <svg class="icon" aria-hidden="true" v-else>
      <use :xlink:href="`#${name}`"></use>
    </svg>
  </span>
</template>
<script>
export default {
  name: "ezIcon",
  props: {
    builtIn: {
      type: Boolean,
      default: true,
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
