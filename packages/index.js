import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

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
import ezContainer from './ezContainer'

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
    ezDialogForm,
    ezContainer
]
const install = function (Vue) {
    Vue.use(ElementUI)
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export default install