import ezEditor from './src/index.vue'
ezEditor.install = function (Vue) {
    Vue.component(ezEditor.name, ezEditor);
};
export default ezEditor;