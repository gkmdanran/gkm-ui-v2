<template>
  <div
    class="ez-editor"
    :class="[disabled ? 'disabled' : '']"
    v-html="innerHTML"
    :placeholder="placeholder"
    :contenteditable="!disabled"
    @focus="handleFocus"
    @blur="handleBlur"
    @input="handleInput"
  ></div>
</template>

<script>
export default {
  name: "ezEditor",
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    checkList: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      isLocked: false,
      oldValue: "",
    };
  },
  computed: {
    innerHTML: {
      get() {
        return this.textToHtml(this.value);
      },
      set() {},
    },
  },
  methods: {
    handleInput() {
      this.$emit("input", this.$el.innerText);
    },
    handleFocus($event) {
      this.isLocked = true;
      this.oldValue = this.value;
      this.$emit("focus", $event);
    },
    handleBlur($event) {
      this.isLocked = false;
      if (this.oldValue !== this.value) {
        this.handleChange(this.value);
      }

      this.$emit("blur", $event);
    },
    handleChange(val) {
      this.$emit("change", val);
    },
    textToHtml(txt) {
      let html = txt;
      this.checkList.forEach((check) => {
        let word = "";
        let color = "";
        if (typeof check !== null && typeof check == "object") {
          (word = check.word), (color = check.color);
        } else if (typeof check === "string") {
          word = check;
          color = "#e47470";
        }
        let reg = eval(`/${word}/g`);
        let span = `<span style="color:${color}">${word}</span><span></span>`;
        html = html.replace(reg, span);
      });
      return html;
    },
  },
};
</script>
<style lang="less" scoped>
.ez-editor {
  display: inline-block;
  box-sizing: border-box;
  vertical-align: bottom;
  cursor: text;
  width: 100%;
  min-height: 33px;
  font-size: 14px;
  line-height: 1.5;
  color: #606266;
  background-color: #fff;
  background-image: none;
  padding: 5px 15px;
  border: 1px solid #dddfe5;
  border-radius: 4px;
  resize: vertical;
  overflow-y: auto;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  white-space: pre-wrap;
  &:focus-visible {
    outline: none;
  }
  &:focus {
    border-color: #589ef8;
  }
  &:empty:before {
    content: attr(placeholder);
    color: #c1c4cb;
  }
  &:input:before {
    content: none;
  }
}
.ez-editor.disabled {
  border-color: #dddfe4;
  background-color: #f5f7fa;
  color: #c1c4cb;
  cursor: not-allowed;
}
</style>