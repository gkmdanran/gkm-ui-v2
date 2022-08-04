import ezSwitch from './src/index.vue'
ezSwitch.install = function (Vue) {
    Vue.component(ezSwitch.name, ezSwitch);
};
export default ezSwitch;