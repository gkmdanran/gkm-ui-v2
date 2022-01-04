import ezIcon from './src/index.vue'
ezIcon.install = function (Vue) {
  Vue.component(ezIcon.name, ezIcon);
};
export default ezIcon;