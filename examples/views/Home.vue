<template>
  <div class="container">
    {{ radio }}
    <ez-radio-group
      v-model="radio"
      @change="change"
      :before-change="handleBeforeChange"
    >
      <el-radio-button :label="3">3</el-radio-button>
      <el-radio-button :label="6">6</el-radio-button>
      <el-radio-button :label="9">9</el-radio-button>
    </ez-radio-group>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      radio: '',
    };
  },
  methods: {
    change(val) {
      console.log(val, "change");
    },
    handleBeforeChange(val) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.radio=val
          // return true;
        })
        .catch(() => {
          
          // return false;
        });
    },
  },
  created() {
   setTimeout(()=>{
     this.radio=3
   },2000)
  },
};
</script>
<style scoped>
.container {
  padding: 20px;
}
</style>
