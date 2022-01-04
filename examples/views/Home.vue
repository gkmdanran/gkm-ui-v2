<template>
  <ez-container title="产品回收站">
  </ez-container>
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
    back() {
      console.log('selfbACK')
    },
  },
};
</script>
