<template>
  <div class="ez-edit-input">
    <div class="edit" v-if="selfMode === 'edit'">
      <el-input
        class="edit-input"
        :class="[wrong !== '' ? 'wrong' : '']"
        ref="editInput"
        v-bind="$attrs"
        v-focus
        :value="value"
        @keyup.enter.native="confirm('enter')"
        @input="handelInput($event)"
        style="width: 100%"
      >
        <el-button
          v-if="$attrs.type !== 'textarea'"
          slot="suffix"
          type="text"
          class="el-input__icon"
          @click="confirm('click')"
          >确认</el-button
        >
      </el-input>

      <el-button
        v-if="$attrs.type === 'textarea'"
        type="text"
        class="el-input__icon textbtn"
        @click="confirm('click')"
        >确认</el-button
      >
      <div class="err-msg" v-show="wrong !== '' && showError">{{ wrong }}</div>
    </div>

    <div class="read" v-else>
      <div class="text">
        <pre v-if="$attrs.type === 'textarea'" class="textarea">{{
          value
        }}</pre>
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
    showError: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
    mode: {
      type: String,
      default: "read",
    },
    required: {
      type: Boolean,
      default: false,
    },
    validator: {
      type: Function,
    },
  },
  data() {
    return {
      selfMode: "read",
      wrong: "",
    };
  },
  watch: {
    mode: {
      handler(v) {
        if (this.value === "") {
          this.selfMode = "edit";
        } else {
          this.selfMode = v;
        }
      },
      immediate: true,
    },
  },
  methods: {
    handelInput(val) {
      this.$emit("input", val);
    },
    confirm(type) {
      if (type === "enter" && this.$attrs.type === "textarea") return;
      if (this.required && this.value === "") {
        this.wrong = "内容不能为空";
        return this.$emit("error", this.wrong);
      } else if (this.validator !== undefined) {
        this.validator(this.value)
          .then((res) => {
            this.wrong = "";
            this.changeMode("read");
            this.$emit("change", res);
          })
          .catch((err) => {
            this.wrong = err;
            return this.$emit("error", this.wrong);
          });
      } else {
        this.wrong = "";
        this.changeMode("read");
        this.$emit("change", this.value);
      }
    },
    changeMode(mode) {
      this.selfMode = mode;
    },
  },
};
</script>
<style lang="less" scoped>
.ez-edit-input {
  .edit {
    position: relative;
    .edit-input.wrong {
      /deep/ input {
        border-color: #f56c6c;
      }
      /deep/ textarea {
        border-color: #f56c6c;
      }
    }
    .el-input__icon {
      padding: 0;
      margin-right: 5px;
    }
    .err-msg {
      position: absolute;
      bottom: -15px;
      left: 0;
      font-size: 10px;
      color: #f56c6c;
    }
    .textbtn {
      height: auto;
      padding: 0;
      position: absolute;
      bottom: 6px;
      right: 6px;
    }
  }
  .read {
    display: flex;
    min-height: 30px;
    align-items: flex-end;
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