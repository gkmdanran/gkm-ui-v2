import ezButton from './src/index.vue'
ezButton.install = function (Vue) {
    Vue.component(ezButton.name, ezButton);
};
export default ezButton;