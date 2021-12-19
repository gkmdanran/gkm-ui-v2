import ezMenu from './src/index.vue'
ezMenu.install = function (Vue) {
    Vue.component(ezMenu.name, ezMenu);
};
export default ezMenu;