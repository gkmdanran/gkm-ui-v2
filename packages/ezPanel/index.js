import ezPanel from './src/index.vue'
ezPanel.install = function (Vue) {
    Vue.component(ezPanel.name, ezPanel);
};
export default ezPanel;