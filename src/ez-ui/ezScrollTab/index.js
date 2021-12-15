import ezScrollTab from './src/index.vue'
ezScrollTab.install = function (Vue) {
    Vue.component(ezScrollTab.name, ezScrollTab);
};
export default ezScrollTab;