import ezCollapseList from './src/index.vue'
ezCollapseList.install = function (Vue) {
    Vue.component(ezCollapseList.name, ezCollapseList);
};
export default ezCollapseList;