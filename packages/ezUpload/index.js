import ezUpload from './src/index.vue'
ezUpload.install = function (Vue) {
    Vue.component(ezUpload.name, ezUpload);
};
export default ezUpload;