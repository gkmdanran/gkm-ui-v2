<template>
  <div class="container">
    {{ radio }}
    <ez-radio-group
      v-model="radio"
      @change="change"
      :before-change="handleBeforeChange"
    >
      <el-radio :label="3">3</el-radio>
      <el-radio :label="6">6</el-radio>
      <el-radio :label="9">9</el-radio>
    </ez-radio-group>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      radio: 3,
    };
  },
  methods: {
    change(val) {
      console.log(val);
    },
    handleBeforeChange(val) {
      console.log(val)
      return this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          return true;
        })
        .catch(() => {
          return false
        });
    },
  },
  created() {},
};
</script>
<style scoped>
.container {
  padding: 20px;
}
</style>
