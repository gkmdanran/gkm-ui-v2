<template>
  <div class="ez-scroll-tab left" v-if="tabPosition == 'left'">
    <div class="tab_area">
      <el-tabs
        tab-position="left"
        style="height: 100%; width: 100%"
        v-model="activeTab"
        @tab-click="handleClick"
      >
        <el-tab-pane
          v-for="tab in tabs"
          :key="tab.name"
          :label="tab.label"
          :name="tab.name"
        ></el-tab-pane>
      </el-tabs>
    </div>
    <el-scrollbar ref="ezScroll" class="ez-scroll">
      <div
        v-for="(item, index) in tabs"
        :key="item.name"
        :ref="item.name"
        :style="[index == tabs.length - 1 ? lastStyle : '']"
      >
        <slot :name="item.name"></slot>
      </div>
      <div></div>
    </el-scrollbar>
  </div>
  <div class="ez-scroll-tab" v-else>
    <div class="tab_area">
      <el-tabs
        style="height: 100%"
        v-model="activeTab"
        @tab-click="handleClick"
      >
        <el-tab-pane
          v-for="tab in tabs"
          :key="tab.name"
          :label="tab.label"
          :name="tab.name"
        ></el-tab-pane>
      </el-tabs>
    </div>
    <el-scrollbar ref="ezScroll" class="ez-scroll">
      <div
        v-for="(item, index) in tabs"
        :key="item.name"
        :ref="item.name"
        :style="[index == tabs.length - 1 ? lastStyle : '']"
      >
        <slot :name="item.name"></slot>
      </div>
      <div></div>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: "ezScrollTab",
  props: {
    tabPosition: {
      type: String,
      default: "top",
    },
    tabs: {
      type: Array,
      default: () => [],
    },
    currentTab: {
      required: true,
    },
  },
  components: {},
  data() {
    return {
      offsetTopArr: [],
      activeTab: "",
      moveTo: -1,
      flag: true, //是否需要跟随滚动
      lastStyle: {
        height: "0px",
      },
    };
  },
  watch: {
    currentTab: {
      handler(v) {
        this.activeTab = v;
      },
      immediate: true,
    },
  },
  methods: {
    handleClick() {
      this.flag = false; //点击切换时候不需要跟随滚动
      this.moveTo = this.$refs[this.activeTab][0].offsetTop; //记录想要滚动到的位置
      this.scrollTop(this.$refs[this.activeTab][0].offsetTop);
      this.$emit("change", this.activeTab);
    },
    cubic(value) {
      return Math.pow(value, 3);
    },
    easeInOutCubic(value) {
      return value < 0.5
        ? this.cubic(value * 2) / 2
        : 1 - this.cubic((1 - value) * 2) / 2;
    },
    scrollTop(h) {
      //h：滚动到指定元素的offsetHeight
      const rAF =
        window.requestAnimationFrame || ((func) => setTimeout(func, 16));
      const el = this.$refs["ezScroll"].wrap;
      const beginTime = Date.now();
      const beginValue = el.scrollTop;
      const frameFunc = () => {
        const progress = (Date.now() - beginTime) / 500;
        if (progress < 1 && el.scrollTop >= h) {
          //向上滚动
          el.scrollTop =
            (beginValue - h) * (1 - this.easeInOutCubic(progress)) + h;
          rAF(frameFunc);
        } else if (progress < 1 && el.scrollTop < h) {
          //向下滚动
          el.scrollTop =
            (h - beginValue) * this.easeInOutCubic(progress) + beginValue;

          rAF(frameFunc);
        } else {
          el.scrollTop = h;
          return;
        }
      };
      rAF(frameFunc);
    },
    handleScroll() {
      let scrollbarEl = this.$refs.ezScroll.wrap;
      scrollbarEl.onscroll = () => {
        let position = scrollbarEl.scrollTop;
        if (this.flag) {
          //需要跟随滚动
          for (let i = 0; i < this.offsetTopArr.length - 1; i++) {
            if (
              position >= this.offsetTopArr[i] &&
              position < this.offsetTopArr[i + 1]
            ) {
              let name = this.tabs[i].name;
              this.activeTab = name;
            }
          }
        } else {
          if (position == this.moveTo) {
            //点击切换到达目的地后，解开限制
            this.flag = true;
          }
        }
      };
    },
    getBottomHeight() {
      var height =
        this.$refs.ezScroll.$el.offsetHeight -
        this.$refs[this.tabs[this.tabs.length - 1].name][0].offsetHeight;
      if (height > 0) {
        this.lastStyle.height = height + "px";
      }
    },
  },

  mounted() {
    var arr = [];
    this.flag = false; //点击切换时候不需要跟随滚动
    this.moveTo = this.$refs[this.activeTab][0].offsetTop; //记录想要滚动到的位置
    this.scrollTop(this.$refs[this.activeTab][0].offsetTop);
    this.tabs.forEach((item) => {
      arr.push(this.$refs[item.name][0].offsetTop);
    });
    arr.push(99999999);
    this.offsetTopArr = arr;
    this.getBottomHeight();
    this.handleScroll();
  },
};
</script>
<style lang="less" scoped>
.ez-scroll-tab {
  .tab_area {
    height: 40px;
  }
  .ez-scroll {
    width: 100%;
    height: calc(100% - 40px);
    /deep/ .el-scrollbar__wrap {
      overflow-x: hidden;
      overflow-y: scroll;
    }
  }
}
.ez-scroll-tab.left {
  display: flex;
  .tab_area {
    width: 96px;
    height: 100%;
  }
  .ez-scroll {
    flex: 1;
    height: calc(100%);
  }
}
</style>