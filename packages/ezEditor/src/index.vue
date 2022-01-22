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
      tempText: this.value,
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
    handleInput($event, value) {
      this.$el.focus();
      let html = null;
      let ifChangedByValue = false;
      // 自动高亮and or ( ) 的html
      if (value) {
        ifChangedByValue = true;
      } else {
        value = this.$el.innerText;
      }
      html = this.textToHtml(value);
      let offsetInit = value ? value.length : 0; // 当前编辑的节点的偏移值，初始化为总长度或0
      const newValueList = value.split("");
      const oldValueList = this.tempText.split("");
      if (newValueList.length > oldValueList.length) {
        // 输入值
        for (const indexOfValue in newValueList) {
          if (newValueList[indexOfValue] !== oldValueList[indexOfValue]) {
            offsetInit = parseInt(indexOfValue) + 1;
            break;
          }
        }
      } else {
        // 删除值
        for (const indexOfValue in oldValueList) {
          if (newValueList[indexOfValue] !== oldValueList[indexOfValue]) {
            offsetInit = parseInt(indexOfValue);
            break;
          }
        }
      }
      if (window.getSelection) {
        // IE9 and non-IE
        const sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
          let range = sel.getRangeAt(0);
          range.deleteContents();
          var el = document.createElement("div");
          el.innerHTML = html;
          var frag = document.createDocumentFragment();
          var node;
          const nodeList = [];
          while ((node = el.firstChild)) {
            nodeList.push(frag.appendChild(node));
          }
          this.$el.innerHTML = ""; // 清空原有的html
          range.insertNode(frag);
          let offsetTemp = 0;
          let nodeIndex = 0;
          for (const indexOfNodes in this.$el.childNodes) {
            let currentNodeLength = 0;
            let nodeType = 1;
            if (this.$el.childNodes[indexOfNodes].nodeType === 1) {
              // span节点
              currentNodeLength =
                this.$el.childNodes[indexOfNodes].innerText.length;
              nodeType = 1;
            } else if (this.$el.childNodes[indexOfNodes].nodeType === 3) {
              // text节点
              currentNodeLength =
                this.$el.childNodes[indexOfNodes].nodeValue.length;
              nodeType = 3;
            }
            if (offsetTemp + currentNodeLength >= offsetInit) {
              if (nodeType === 1) {
                // 编辑的节点的偏移值计算
                offsetInit = 1; // 元素节点偏移值固定为0、1
              } else {
                offsetInit = offsetInit - offsetTemp; // 文本节点偏移值计算
              }
              nodeIndex = parseInt(indexOfNodes);
              break;
            }
            offsetTemp += currentNodeLength; // 累加编辑的节点之前的节点的长度
          }
          if (nodeList && nodeList[nodeIndex]) {
            // nodeList[nodeIndex]为编辑的时候所在的节点
            range = range.cloneRange();
            range.setStart(nodeList[nodeIndex], offsetInit);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
          }
        }
      } else if (document.selection && document.selection.type !== "Control") {
        // IE < 9
        document.selection.createRange().pasteHTML(html);
      }
      this.tempText = this.$el.innerText;
      if (!ifChangedByValue) {
        // 如果是通过父组件传值改变值，则不再通知父组件；否则$emit
        this.$emit("input", this.$el.innerText); // 通知父组件，value值改变
      }
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
      this.innerHTML = this.textToHtml(this.value);
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