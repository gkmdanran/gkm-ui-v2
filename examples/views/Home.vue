<template>
  <div class="container">
   
    <ez-editor
      :placeholder="'请输入内容'"
      v-model="value"
      @change="change"
      :checkList="checkList"
    ></ez-editor>

  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      checkList:['你好'],
      value:'33222'
    };
  },
  created() {
    // window.setTimeout(() => {
    //   this.value = "33333";
    // }, 1000);
  },
  methods: {
    change(e) {
     
    },
  },
};
</script>
<style scoped>
.container {
  padding: 20px;
}
</style>
