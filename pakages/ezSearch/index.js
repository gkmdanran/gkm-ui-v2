import ezSearch from './src/index.vue'
ezSearch.install = function (Vue) {
    Vue.component(ezSearch.name, ezSearch);
};
export default ezSearch;