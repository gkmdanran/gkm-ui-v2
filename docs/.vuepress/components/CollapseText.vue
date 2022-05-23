<template>
  <ez-collapse-text
    text="小草偷偷地从土里钻出来，嫩嫩的，绿绿的。"
    :limit="10"
    :expand="false"
    @change="handleChange"
  ></ez-collapse-text>
</template>
<script>
export default {
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>

