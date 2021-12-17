<template>
  <div class="ez-edit-select">
    <div class="edit" v-if="selfMode === 'edit'">
      <el-select
        v-focus
        v-bind="$attrs"
        class="select"
        :class="[wrong ? 'wrong' : '']"
        :value="value"
        :multiple="multiple"
        @input="handelInput($event)"
        placeholder="请选择"
      >
        <el-option
          v-for="(item, index) in options"
          :key="index"
          :label="item[optionProps.label || 'label']"
          :value="item[optionProps.value || 'value']"
          v-bind="item"
        >
        </el-option>
      </el-select>
      <div class="icon">
        <i
          class="el-icon-check"
          style="color: #24acf2; cursor: pointer"
          @click="handleCheck()"
        ></i>
      </div>
    </div>

    <div class="read" v-else>
      <div class="text">{{ label }}</div>
      <div class="icon">
        <i
          class="el-icon-edit"
          style="color: #24acf2; cursor: pointer"
          @click="changeMode('edit')"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "ezEditSelect",

  props: {
    options: {
      type: Array,
      default: () => [],
    },
    optionProps: {
      type: Object,
      default: () => ({
        label: "label",
        value: "value",
      }),
    },
    value: {},
    mode: {
      type: String,
      default: "read",
    },
    required: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.querySelector("input") && el.querySelector("input").focus();
      },
    },
  },
  data() {
    return {
      selfMode: "read",
      wrong: false,
      label: "",
    };
  },
  watch: {
    mode: {
      handler(v) {
        this.selfMode = v;
      },
      immediate: true,
    },
    value: {
      handler(v) {
        if (this.multiple && !Array.isArray(v))
          throw new Error("typeof value must be a array");
        if (this.multiple) {
          var arr = [];
          v.forEach((vitem) => {
            var opt = this.options.find(
              (item) => item[this.optionProps.value || "value"] == vitem
            );
            console.log(opt);
            arr.push(opt ? opt[this.optionProps.label || "label"] : "");
          });
          this.label = arr.join(",");
        } else {
          var opt = this.options.find(
            (item) => item[this.optionProps.value || "value"] == v
          );
          this.label = opt ? opt[this.optionProps.label || "label"] : "";
        }
      },
      immediate: true,
    },
  },
  methods: {
    handleCheck() {
      if (
        this.required &&
        (!this.value || (this.multiple && !this.value.length))
      ) {
        this.$emit("error", this.value);
        return (this.wrong = true);
      }
      this.wrong = false;
      this.changeMode("read");
      this.$emit("change", this.value);
    },
    handelInput(val) {
      this.$emit("input", val);
    },

    changeMode(mode) {
      this.selfMode = mode;
    },
  },
};
</script>
<style lang="less" scoped>
.ez-edit-select {
  .select.wrong {
    /deep/ input {
      border-color: #f56c6c;
    }
    /deep/ textarea {
      border-color: #f56c6c;
    }
  }
  .read,
  .edit {
    display: flex;
    min-height: 30px;
    align-items: center;
    .text,
    .select {
      max-width: calc(100% - 23px);
    }
    .icon {
      width: 23px;
      text-align: right;
    }
  }
}
</style>