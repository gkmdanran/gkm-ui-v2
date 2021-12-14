import ezEditInput from './src/index.vue'
ezEditInput.install = function (Vue) {
    Vue.component(ezEditInput.name, ezEditInput);
};
export default ezEditInput;