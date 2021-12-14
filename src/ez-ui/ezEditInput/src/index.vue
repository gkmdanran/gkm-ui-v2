<template>
  <div class="ez-edit-input">
    <el-input
      class="edit-input"
      :class="[wrong ? 'wrong' : '']"
      ref="editInput"
      v-bind="$attrs"
      v-if="selfMode == 'edit'"
      v-focus
      :value="value"
      @input="handelInput($event)"
      @blur="handleBlur()"
      style="width: 100%"
    ></el-input>
    <div class="read" v-else>
      <div class="text">
        <pre v-if="$attrs.type === 'textarea'" class="textarea">{{value}}</pre>
        <div class="input" v-else>{{ value }}</div>
      </div>
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
  name: "ezEditInput",
  directives: {
    focus: {
      inserted: function (el) {
        el.querySelector("textarea") && el.querySelector("textarea").focus();
        el.querySelector("input") && el.querySelector("input").focus();
      },
    },
  },
  props: {
    value: {},
    mode: {
      type: String,
      default: "read",
    },
    reg: {
      type: RegExp,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selfMode: "read",
      wrong: false,
    };
  },
  watch: {
    mode: {
      handler(v) {
        this.selfMode = v;
      },
      immediate: true,
    },
  },
  methods: {
    handelInput(val) {
      this.$emit("input", val);
    },
    handleBlur() {
      if (this.required && !this.value) {
        return (this.wrong = true);
      }
      if (this.reg) {
        if (this.$attrs.type == "textarea") {
          var valueArr = this.value.split(/\r?\n/);
          var flag = valueArr.some((item) => !this.reg.test(item));
          if (flag){
            this.$emit('error')
            return (this.wrong = true);
          }
        } else {
          if (!this.reg.test(this.value)){
            this.$emit('error')
            return (this.wrong = true);
          }
        }
      }
      this.wrong = false;
      this.changeMode("read");
      this.$emit('change',this.value)
    },
    changeMode(mode) {
      this.selfMode = mode;
    },
  },
};
</script>
<style lang="less" scoped>
.ez-edit-input {
  .edit-input.wrong {
    /deep/ input {
      border-color: #f56c6c;
    }
    /deep/ textarea {
      border-color: #f56c6c;
    }
  }
  .read {
    display: flex;
    min-height: 30px;
    align-items: center;
    .text {
      max-width: calc(100% - 23px);
      .input {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
      }
      .textarea {
        font-size: inherit;
        font-family: inherit;
        white-space: pre-wrap;
      }
    }
    .icon {
      width: 23px;
      text-align: right;
    }
  }
}
</style>