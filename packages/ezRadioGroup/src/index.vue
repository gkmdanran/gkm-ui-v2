<template>
  <el-radio-group
    v-bind="$attrs"
    :value="value"
    @input="handleInput"
    @change="handleChange"
  >
    <slot></slot>
  </el-radio-group>
</template>
<script>
export default {
  name: "ezRadioGroup",
  props: {
    value: {
      required: true,
    },
    beforeChange: {
      type: Function,
    },
  },
  data() {
    return {
      preValue: "",
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(newVal, oldVal) {
        this.preValue = oldVal;
      },
    },
  },
  methods: {
    handleInput(val) {
      this.$emit("input", val);
    },
    async handleChange(val) {
      if (this.beforeChange === undefined) {
        return this.$emit("change", val);
      }
      let result = await this.beforeChange(val);
      if (result) {
        this.$emit("change", val);
      } else {
        this.$emit("input", this.preValue);
      }
    },
  },
};
</script>
<style lang="less" scoped>
</style>
