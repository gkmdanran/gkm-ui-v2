import ezContainer from './src/index.vue'
ezContainer.install = function (Vue) {
    Vue.component(ezContainer.name, ezContainer);
};
export default ezContainer;