<template>
  <el-dialog v-bind="$attrs" v-on="$listeners" :visible="visible">
    <el-form
      ref="form"
      :model="value"
      :label-width="
        (formJson.formAttributes && formJson.formAttributes.labelWidth) ||
        '80px'
      "
      v-bind="formJson.formAttributes || {}"
    >
      <el-row>
        <el-col
          :span="item.layout || 24"
          v-for="(item, key) in formJson.formItems || {}"
          :key="key"
        >
          <el-form-item
            :label="item.label"
            :prop="key"
            :style="
              formJson.itemStyle ? formJson.itemStyle : 'margin-bottom:18px'
            "
          >
            <el-input
              v-if="item.type === 'input'"
              :clearable="item.clearable || true"
              :placeholder="item.placeholder || `请输入${item.label}`"
              style="width: 100%"
              v-bind="item.attrs || {}"
              :value="value[key]"
              @input="handleValueChange($event, key)"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('update:visible', false)" v-if="cancelText">{{
        cancelText
      }}</el-button>
      <el-button type="primary" @click="submitForm">{{
        confrimText
      }}</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "ezDialogForm",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    formJson: {
      type: Object,
      required: true,
    },
    value: {
      required: true,
    },
    confrimText: {
      type: String,
      default: "确 认",
    },
    cancelText: {
      type: String,
      default: "取 消",
    },
  },
  data() {
    return {};
  },
  watch: {
    visible: {
      handler(v) {
        if (!v) {
          this.$refs["form"].resetFields();
          const form = {};
          for (let key in this.value) {
            form[key] = "";
          }
          this.$emit("input", { ...form });
        }
      },
    },
  },
  methods: {
    submitForm() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          this.$emit("success", this.value);
        } else {
          this.$emit("error", this.value);
          return false;
        }
      });
    },
    handleValueChange(val, key) {
      this.$emit("input", { ...this.value, [key]: val });
    },
  },
  created() {},
};
</script>
<style lang="less" scoped>
</style>