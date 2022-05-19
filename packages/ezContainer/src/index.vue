<template>
  <div class="ez-container">
    <div class="header">
      <div class="back" @click="handleBack()">
        <slot name="backButton">
          <i class="el-icon-arrow-left"></i>
          <span class="back-text">返回</span>
        </slot>
      </div>
      <span class="title">{{ title }}</span>
      <div class="right_btn">
        <slot name="rightButton"></slot>
      </div>
    </div>

    <div class="body" v-if="scroll">
      <el-scrollbar class="container-scroll">
        <div class="main-content">
          <slot></slot>
        </div>
      </el-scrollbar>
    </div>
    <div class="body" v-else>
      <div class="main-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ezContainer",
  props: {
    title: {
      type: String,
      default: "",
    },
    scroll: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleBack() {
      if (!this.$listeners.back) {
        history.go(-1);
      } else {
        this.$emit("back");
      }
    },
  },
};
</script>


<style scoped>
.ez-container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;
  position: relative;
}

.header {
  background: #fff;
  height: 50px;
  text-align: center;
  line-height: 50px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.05);
  position: relative;
}

.back {
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  margin-left: 25px;
  cursor: pointer;
  font-size: 15px;
  color: #606266;
  font-weight: 700;
}

.back-text {
  margin-left: 5px;
  font-weight: 400;
}

.title {
  font-size: 20px;
  color: #202124;
}

.right_btn {
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 25px;
  cursor: pointer;
}

.body {
  box-sizing: border-box;
  margin-top: 10px;
  background-color: #fff;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.05);
  height: calc(100% - 60px);
  overflow: hidden;
}

.container-scroll {
  width: 100%;
  height: 100%;
}

.container-scroll >>> .el-scrollbar__wrap {
  overflow-x: hidden;
  overflow-y: scroll;
}

.main-content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px 25px;
}
</style>