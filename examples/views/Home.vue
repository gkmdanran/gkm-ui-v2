<template>
  <div class="home">
    {{ form }}
    <ez-button @click="visible = true">222</ez-button>
    <ez-dialog-form
      title="新增"
      :visible.sync="visible"
      v-model="form"
      :form-json="json"
      @success="submit"
    ></ez-dialog-form>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      visible: false,
      form: {
        name: "77",
        age: "",
        sex: "",
      },
      json: {
        formAttributes: {
          rules: {
            name: [
              { required: true, message: "请输入活动名称", trigger: "blur" },
              {
                min: 3,
                max: 5,
                message: "长度在 3 到 5 个字符",
                trigger: "blur",
              },
            ],
          },
        },
        formItems: {
          name: {
            type: "input",
            label: "姓名",
          },
          sex: {
            type: "input",
            label: "性别",
          },
          age: {
            type: "input",
            label: "年龄",
          },
        },
      },
    };
  },
  created() {},
  methods: {
    submit(v) {
      console.log(v);
      this.visible = false;
    },
  },
};
</script>
