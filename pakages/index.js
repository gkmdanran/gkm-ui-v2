import ezButton from "./ezButton";
import ezUpload from './ezUpload'
import ezTable from './ezTable'
import ezCollapseText from './ezCollapseText'
import ezMenu from './ezMenu'
import ezSearch from './ezSearch'
import ezScrollTab from './ezScrollTab'
import ezEditInput from './ezEditInput'
import ezEditSelect from './ezEditSelect'
import ezDialogForm from './ezDialogForm'
const components = [
    ezButton,
    ezUpload,
    ezTable,
    ezCollapseText,
    ezMenu,
    ezSearch,
    ezScrollTab,
    ezEditInput,
    ezEditSelect,
    ezDialogForm
]
const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export default install