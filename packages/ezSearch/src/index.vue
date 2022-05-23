<template>
  <el-form class="ez-search-form" v-bind="$attrs" :labelWidth="labelWidth">
    <el-row>
      <el-col
        :style="getStyle(item)"
        v-for="(item, key) in searchJson.searchItems || {}"
        :xl="
          (item.layout && item.layout.xl) ||
          (searchJson.layout && searchJson.layout.xl) ||
          4
        "
        :lg="
          (item.layout && item.layout.lg) ||
          (searchJson.layout && searchJson.layout.lg) ||
          6
        "
        :md="
          (item.layout && item.layout.md) ||
          (searchJson.layout && searchJson.layout.md) ||
          8
        "
        :sm="
          (item.layout && item.layout.sm) ||
          (searchJson.layout && searchJson.layout.sm) ||
          12
        "
        :xs="
          (item.layout && item.layout.xs) ||
          (searchJson.layout && searchJson.layout.xs) ||
          24
        "
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
          <!-- 输入框 -->
          <el-input
            v-if="item.type === 'input'"
            clearable
            :placeholder="item.placeholder || `请输入${item.label}`"
            style="width: 100%"
            v-bind="item.attrs || {}"
            :value="value[key]"
            @input="handleValueChange($event, value[key], key, item)"
          />
          <!-- 选择下拉框 -->
          <el-select
            v-else-if="item.type === 'select'"
            clearable
            :placeholder="item.placeholder || `请选择${item.label}`"
            style="width: 100%"
            v-bind="item.attrs || {}"
            :value="value[key]"
            @input="handleValueChange($event, value[key], key, item)"
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
          <!-- 单选按钮 -->
          <el-radio-group
            v-else-if="item.type === 'radioButton'"
            style="width: 100%"
            v-bind="item.attrs || {}"
            :value="value[key]"
            @input="handleValueChange($event, value[key], key, item)"
          >
            <el-radio-button
              v-for="opt in item.selectOptions"
              v-bind="opt"
              :key="
                opt[(item.selectProps && item.selectProps.value) || 'value']
              "
              :label="
                opt[(item.selectProps && item.selectProps.value) || 'value']
              "
            >
              {{
                opt[(item.selectProps && item.selectProps.label) || "label"]
              }}</el-radio-button
            >
          </el-radio-group>
          <!-- 单选框 -->
          <el-radio-group
            v-else-if="item.type === 'radio'"
            style="width: 100%"
            v-bind="item.attrs || {}"
            :value="value[key]"
            @input="handleValueChange($event, value[key], key, item)"
          >
            <el-radio
              v-for="opt in item.selectOptions"
              v-bind="opt"
              :key="
                opt[(item.selectProps && item.selectProps.value) || 'value']
              "
              :label="
                opt[(item.selectProps && item.selectProps.value) || 'value']
              "
            >
              {{
                opt[(item.selectProps && item.selectProps.label) || "label"]
              }}</el-radio
            >
          </el-radio-group>
          <!-- 时间选择 -->
          <el-time-picker
            v-else-if="item.type === 'time'"
            clearable
            :placeholder="item.placeholder || `请选择${item.label}`"
            style="width: 100%"
            v-bind="item.attrs || {}"
            :value="value[key]"
            @input="handleValueChange($event, value[key], key, item)"
          >
          </el-time-picker>
          <!-- 日期选择 -->
          <el-date-picker
            v-else-if="item.type === 'date' || item.type === 'datetime'"
            clearable
            :placeholder="item.placeholder || `请选择${item.label}`"
            style="width: 100%"
            v-bind="item.attrs || {}"
            :value="value[key]"
            @input="handleValueChange($event, value[key], key, item)"
          >
          </el-date-picker>
        </el-form-item>
      </el-col>
      <slot name="searchButton"></slot>
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
      type: String,
      default: "80px",
    },
    value: {
      type: Object,
      required: true,
    },
    debounce: {
      type: Number,
      default: 300,
    },
  },
  data() {
    return {
      timeout: -1,
    };
  },
  methods: {
    getStyle(item) {
      if (!("layout" in item)) {
        if (typeof this.searchJson.layout === "string") {
          return `min-width:${this.searchJson.layout}!important;max-width:${this.searchJson.layout}!important;`;
        } else {
          return "";
        }
      } else if (typeof item.layout === "string") {
        return `min-width:${item.layout}!important;max-width:${item.layout}!important;`;
      } else {
        return "";
      }
    },
    handleValueChange(newVal, oldVal, key, item) {
      let value = item.type === "input" && item.isTrim ? newVal.trim() : newVal;
      if (value === oldVal) return;
      this.$emit("input", { ...this.value, [key]: value });
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = window.setTimeout(() => {
        this.$emit("change", { ...this.value, [key]: value });
      }, this.debounce);
    },
  },
};
</script>
<style scoped>
.el-row {
  display: flex;
  flex-wrap: wrap;
}
.ez-search >>> .el-form-item__label {
  padding: 0;
}

.ez-search >>> .el-form-item {
  margin-bottom: 0px;
}
</style>