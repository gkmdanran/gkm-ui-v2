<template>
  <el-button
    v-bind="$attrs"
    @click="handleClick"
    class="ez-button"
    ref="ezButton"
  >
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: "ezButton",
  props: {
    confirm: {
      type: Object | String,
    },
    throttle: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      status: {
        disabled: false,
      },
      timstamp: 0,
    };
  },

  methods: {
    handleClick(event) {
      if (new Date().valueOf() - this.timstamp < this.throttle) return;
      if (this.confirm === undefined) {
        !this.status.disabled &&
          this.$emit(
            "click",
            this.throttle === -1 ? { event, status: this.status } : event
          );
        this.timstamp = new Date().valueOf();
        this.throttle === -1 && (this.status.disabled = true);
      } else if (typeof this.confirm === "string") {
        !this.status.disabled &&
          this.$confirm(this.confirm, "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          })
            .then(() => {
              this.throttle === -1
                ? this.$emit("confirmClick", this.status)
                : this.$emit("confirmClick");
              this.timstamp = new Date().valueOf();
              this.throttle === -1 && (this.status.disabled = true);
            })
            .catch(() => {
              this.$emit("cancelClick");
            });
      } else {
        if (!this.confirm.message)
          throw new Error("confirm.message is required");
        !this.status.disabled &&
          this.$confirm(this.confirm.message, this.confirm.title || "提示", {
            confirmButtonText: this.confirm.confirmText || "确定",
            cancelButtonText: this.confirm.cancelText || "取消",
            type: this.confirm.type || "warning",
          })
            .then(() => {
              this.throttle === -1
                ? this.$emit("confirmClick", this.status)
                : this.$emit("confirmClick");
              this.timstamp = new Date().valueOf();
              this.throttle === -1 && (this.status.disabled = true);
            })
            .catch(() => {
              this.$emit("cancelClick");
            });
      }
    },
  },
};
</script>