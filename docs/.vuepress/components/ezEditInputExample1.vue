<template>
  <div class="editinputcontent">
    <ez-edit-input
      v-model="value"
      mode="read"
      type="input"
      required
      @change="handleChange"
      @error="handleError"
      :reg="/^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i"
    ></ez-edit-input>
    <ez-edit-input
      v-model="value2"
      mode="read"
      type="textarea"
      required
      @change="handleChange"
      @error="handleError"
    ></ez-edit-input>
  </div>
</template>

<script>
export default {
  name: "ezEditInputExample1",
  data() {
    return {
      value: "gkmui123",
      value2: "gkmui123",
    };
  },
  methods: {
    handleChange(v) {
      console.log(v);
    },
    handleError(v) {
      alert("格式不规范");
      console.log(v);
    },
  },
};
</script>
<style  scoped>
.editinputcontent {
  padding: 20px;
  margin: 10px 0;
  border: 1px solid #ebebeb;
  border-radius: 10px;
}

</style>
<style >
.editinputcontent pre{
  background: #fff!important;
}
</style>
