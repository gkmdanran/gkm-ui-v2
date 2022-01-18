<template>
  <div class="ez-lazy-wrap" ref="wrap" @scroll="wrapScroll">
    <slot name="header"></slot>
    <img
      ref="img"
      :src="defaultSrc"
      :data-src="img.src"
      v-for="(img, index) in imgList"
      :key="index"
      class="ez-lazy-img"
      :class="img.className ? img.className : className"
      v-bind="img"
    />
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "ezLazyImg",
  props: {
    imgList: {
      type: Array,
      default: () => [],
    },
    className: {
      type: String,
      default: "",
    },
    defaultSrc: {
      type: String,
      default: "/ezLazyDefaultPath",
    },
    scrollDelay: {
      type: Number,
      default: 100,
    },
  },
  components: {},
  data() {
    return {
      wrapHeight: 0,
      wrapScrollTop: 0,
      imgDomList: [],
      timer: null,
    };
  },

  methods: {
    debounce(fn) {
      return () => {
        if (this.timer) {
          window.clearTimeout(this.timer);
          this.timer = null;
        }
        this.timer = window.setTimeout(() => {
          fn();
        }, this.scrollDelay);
      };
    },
    wrapScroll() {
      const debounceScroll = this.debounce(() => {
        this.scrollToTop();
      });
      debounceScroll();
    },
    lazyLoad() {
      for (let i = 0; i < this.imgDomList.length; i++) {
        let img = this.imgDomList[i];
        if (
          this.wrapHeight + this.wrapScrollTop > img.offsetTop &&
          ((this.defaultSrc != "/ezLazyDefaultPath" &&
            img.src.includes(this.defaultSrc)) ||
            img.src.includes("/ezLazyDefaultPath"))
        ) {
          img.src = img.dataset.src;
        }
      }
    },
    scrollToTop() {
      if (!this.$refs.wrap) return;
      this.wrapScrollTop = this.$refs.wrap.scrollTop;
      this.lazyLoad();
    },
  },

  mounted() {
    this.wrapHeight = this.$refs.wrap.offsetHeight;
    this.imgDomList = document.querySelectorAll(".ez-lazy-img");
    this.lazyLoad();
  },
};
</script>
<style lang="less" scoped>
.ez-lazy-wrap {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .ez-lazy-img {
    vertical-align: middle;
    margin-bottom: 10px;
    background-color: #ccc;
  }
}
</style>
<style lang="less" >
* {
  margin: 0;
  padding: 0;
}
</style>