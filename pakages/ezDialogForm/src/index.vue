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
            <el-input-number
              v-else-if="item.type === 'inputNumber'"
              :clearable="item.clearable || true"
              :placeholder="item.placeholder || `请输入${item.label}`"
              style="width: 100%"
              v-bind="item.attrs || {}"
              :value="value[key]"
              @input="handleValueChange($event, key)"
            />
            <el-select
              v-else-if="item.type === 'select'"
              :clearable="item.clearable || true"
              :placeholder="item.placeholder || `请选择${item.label}`"
              style="width: 100%"
              v-bind="item.attrs || {}"
              :value="value[key]"
              @input="handleValueChange($event, key)"
            >
              <el-option
                v-for="opt in item.selectOptions || []"
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
              v-else-if="item.type === 'radio' || item.type === 'radioButton'"
              :clearable="item.clearable || true"
              :placeholder="item.placeholder || `请选择${item.label}`"
              style="width: 100%"
              v-bind="item.attrs || {}"
              :value="value[key]"
              @input="handleValueChange($event, key)"
            >
              <template v-for="opt in item.selectOptions || []">
                <el-radio
                  v-if="item.type === 'radio'"
                  v-bind="opt"
                  :key="
                    opt[(item.selectProps && item.selectProps.value) || 'value']
                  "
                  :label="
                    opt[(item.selectProps && item.selectProps.value) || 'value']
                  "
                  >{{
                    opt[(item.selectProps && item.selectProps.label) || "label"]
                  }}</el-radio
                >
                <el-radio-button
                  v-if="item.type === 'radioButton'"
                  v-bind="opt"
                  :key="
                    opt[(item.selectProps && item.selectProps.value) || 'value']
                  "
                  :label="
                    opt[(item.selectProps && item.selectProps.value) || 'value']
                  "
                  >{{
                    opt[(item.selectProps && item.selectProps.label) || "label"]
                  }}</el-radio-button
                >
              </template>
            </el-radio-group>
            <el-checkbox-group
              v-else-if="
                item.type === 'checkbox' || item.type === 'checkboxButton'
              "
              :clearable="item.clearable || true"
              :placeholder="item.placeholder || `请选择${item.label}`"
              style="width: 100%"
              v-bind="item.attrs || {}"
              :value="value[key]"
              @input="handleValueChange($event, key)"
            >
              <template v-for="opt in item.selectOptions || []">
                <el-checkbox
                  v-if="item.type === 'checkbox'"
                  v-bind="opt"
                  :key="
                    opt[(item.selectProps && item.selectProps.value) || 'value']
                  "
                  :label="
                    opt[(item.selectProps && item.selectProps.value) || 'value']
                  "
                  >{{
                    opt[(item.selectProps && item.selectProps.label) || "label"]
                  }}</el-checkbox
                >
                <el-checkbox-button
                  v-if="item.type === 'checkboxButton'"
                  v-bind="opt"
                  :key="
                    opt[(item.selectProps && item.selectProps.value) || 'value']
                  "
                  :label="
                    opt[(item.selectProps && item.selectProps.value) || 'value']
                  "
                  >{{
                    opt[(item.selectProps && item.selectProps.label) || "label"]
                  }}</el-checkbox-button
                >
              </template>
            </el-checkbox-group>

            <el-time-picker
              v-else-if="item.type === 'time'"
              :clearable="item.clearable || true"
              :placeholder="item.placeholder || `请选择${item.label}`"
              style="width: 100%"
              v-bind="item.attrs || {}"
              :value="value[key]"
              @input="handleValueChange($event, key)"
            >
            </el-time-picker>
            <el-date-picker
              v-else-if="item.type === 'date' || item.type === 'datetime'"
              :clearable="item.clearable || true"
              :placeholder="item.placeholder || `请选择${item.label}`"
              style="width: 100%"
              v-bind="item.attrs || {}"
              :value="value[key]"
              @input="handleValueChange($event, key)"
            >
            </el-date-picker>
            <ez-upload
              v-else-if="item.type === 'upload'"
              v-bind="item.attrs || {}"
              :file-list="value[key]"
              @change="changeUpload(arguments, item)"
              @success="successUpload(arguments, key)"
              @remove="removeUpload(arguments, key)"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div
                slot="tip"
                class="el-upload__tip"
                style="
                  margin-bottom: 5px;
                  height: 15px;
                  line-height: 15px;
                  color: #c80000;
                "
              >
                {{ item.tips || "" }}
              </div>
            </ez-upload>
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
import ezUpload from "../../ezUpload";
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
  components: { ezUpload },
  data() {
    return {};
  },
  watch: {
    visible: {
      handler(v) {
        if (!v) {
          this.$refs["form"].resetFields();
          // const form = {};
          // for (let key in this.value) {
          //   form[key] = "";
          // }
          // this.$emit("input", { ...form });
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
    changeUpload(args, item) {
      if (item.attrs && item.attrs.autoUpload == false) {
        this.$emit("input", { ...this.value, [item.key]: args[1] });
      }
    },
    successUpload(args, key) {
      this.$emit("input", { ...this.value, [key]: args[1] });
    },
    removeUpload(args, key) {
      this.$emit("input", { ...this.value, [key]: args[1] });
    },
  },
  created() {},
};
</script>
<style lang="less" scoped>
</style>