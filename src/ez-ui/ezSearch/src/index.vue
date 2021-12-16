<template>
  <el-form
    class="ez-search-form"
    v-bind="$attrs"
    :label-width="labelWidth"
    v-if="initForm"
  >
    <el-row>
      <el-col
        :style="`width:${
          item.layout && typeof item.layout == 'string' && item.layout
        }`"
        v-for="(item, key) in searchJson.searchItems || {}"
        :xl="(item.layout && item.layout.xl) || 4"
        :lg="(item.layout && item.layout.lg) || 6"
        :md="(item.layout && item.layout.md) || 8"
        :sm="(item.layout && item.layout.sm) || 12"
        :xs="(item.layout && item.layout.xs) || 24"
        :key="key"
      >
        <el-form-item
          :label="item.label + '：'"
          :prop="key"
          :style="
            searchJson.itemStyle
              ? searchJson.itemStyle
              : 'margin-right:8px;margin-bottom:10px'
          "
        >
          <el-input
            v-if="item.type === 'input'"
            clearable
            :placeholder="item.placeholder || `请输入${item.label}`"
            style="width: 100%"
            v-bind="item.attrs || {}"
            :value="initForm[key]"
            @input="handleValueChange($event, key, item)"
          />
          <el-select
            v-else-if="item.type === 'select'"
            clearable
            :placeholder="item.placeholder || `请选择${item.label}`"
            style="width: 100%"
            v-bind="item.attrs || {}"
            :value="initForm[key]"
            @input="handleValueChange($event, key, item)"
          >
            <el-option
              v-for="opt in item.selectOptions"
              v-bind="opt"
              :key="
                opt[(item.selectProps && item.selectProps.value) || 'value']
              "
              :value="
                opt[(item.selectProps && item.selectProps.value) || 'value']
              "
              :label="
                opt[(item.selectProps && item.selectProps.label) || 'label']
              "
            ></el-option>
          </el-select>
          <el-time-picker
            v-else-if="item.type === 'time'"
            clearable
            :placeholder="item.placeholder || `请选择${item.label}`"
            style="width: 100%"
            v-bind="item.attrs || {}"
            :value="initForm[key]"
            @input="handleValueChange($event, key, item)"
          >
          </el-time-picker>
          <el-date-picker
            v-else-if="item.type === 'date' || item.type === 'datetime'"
            clearable
            :placeholder="item.placeholder || `请选择${item.label}`"
            style="width: 100%"
            v-bind="item.attrs || {}"
            :value="initForm[key]"
            @input="handleValueChange($event, key, item)"
          >
          </el-date-picker>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: "ezSearch",
  props: {
    searchJson: {
      type: Object,
      required: true,
    },
    labelWidth: {
      default: "80px",
    },
  },
  data() {
    return {
      initForm: null,
      timer: null,
    };
  },
  methods: {
    handleValueChange(val, key, item) {
      this.initForm[key] = val;
      const debounceEmit = this.debounce(() => {
        this.$emit("search", this.initForm);
      });
      if (item.type === "input") {
        debounceEmit();
      } else {
        this.$emit("search", this.initForm);
      }
    },
    debounce(fn) {
      return () => {
        if (this.timer) {
          window.clearTimeout(this.timer);
          this.timer = null;
        }
        this.timer = window.setTimeout(() => {
          fn();
        }, 500);
      };
    },
  },
  created() {
    const form = {};
    for (let key in this.searchJson.searchItems) {
      form[key] = "";
    }
    this.initForm = form;
    console.log(this.initForm);
  },
};
</script>
<style lang="less" scoped>
.ez-search-form {
  /deep/ .el-form-item__label {
    padding: 0;
  }
  /deep/ .el-form-item {
    margin-bottom: 0px;
  }
}
</style>