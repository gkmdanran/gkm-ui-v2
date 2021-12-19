<template>
  <el-button v-bind="$attrs" v-on="$listeners" @click="handleClick">
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: "ezButton",
  props: {
    confirm: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      if (!this.confirm) return;
      if (!this.confirm.message) throw new Error("confirm.message is required");
      this.$confirm(this.confirm.message, this.confirm.title || "提示", {
        confirmButtonText: this.confirm.confirmText || "确定",
        cancelButtonText: this.confirm.cancelText || "取消",
        type: this.confirm.type || "warning",
      })
        .then(() => {
          this.$emit("confirmClick");
        })
        .catch(() => {
          this.$emit("cancelClick");
        });
    },
  },
};
</script>
<style lang="less" scoped>
</style>