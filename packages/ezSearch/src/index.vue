<template>
  <el-form class="ez-search-form" v-bind="$attrs" :label-width="labelWidth">
    <el-row>
      <el-col
        :style="`width:${
          item.layout && typeof item.layout === 'string' && item.layout
        }`"
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
          <el-input
            v-if="item.type === 'input'"
            clearable
            :placeholder="item.placeholder || `请输入${item.label}`"
            style="width: 100%"
            v-bind="item.attrs || {}"
            :value="value[key]"
            @input="handleValueChange($event, value[key], key, item)"
          />
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
.ez-search >>> .el-form-item__label {
  padding: 0;
}

.ez-search >>> .el-form-item {
  margin-bottom: 0px;
}
</style>