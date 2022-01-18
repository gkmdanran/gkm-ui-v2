import ezLazyImg from './src/index.vue'
ezLazyImg.install = function (Vue) {
    Vue.component(ezLazyImg.name, ezMenu);
};
export default ezLazyImg;