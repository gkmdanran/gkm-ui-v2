import ezTable from './src/index.vue'
ezTable.install = function (Vue) {
    Vue.component(ezTable.name, ezTable);
};
export default ezTable;