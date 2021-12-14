import ezScroll from './src/index.vue'
ezScroll.install = function (Vue) {
    Vue.component(ezScroll.name, ezScroll);
};
export default ezScroll;