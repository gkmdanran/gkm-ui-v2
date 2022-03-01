<template>
  <el-radio-group v-bind="$attrs" :value="value" @input="handleChange">
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
  model: {
    prop: "value",
    event: "change",
  },
  data() {
    return {};
  },
  methods: {
    async handleChange(val) {
      if (this.beforeChange === undefined) return this.$emit("change", val);
      let result = await this.beforeChange(val);
      if (result) return this.$emit("change", val);
    },
  },
};
</script>
<style lang="less" scoped>
/deep/.el-radio-button__orig-radio:checked + .el-radio-button__inner {
  background-color: #fff;
  color: #606266;
  border-color: #dcdfe6;
  box-shadow: none;
}
/deep/.el-radio-button.is-active
  .el-radio-button__orig-radio:checked
  + .el-radio-button__inner {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  box-shadow: -1px 0 0 0 #409eff;
}
</style>
