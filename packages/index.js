import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import ezButton from "./ezButton";
import ezTable from './ezTable'
import ezCollapseText from './ezCollapseText'
import ezMenu from './ezMenu'
import ezSearch from './ezSearch'
import ezEditInput from './ezEditInput'
import ezContainer from './ezContainer'
import ezCollapseList from './ezCollapseList'
import ezRadioGroup from './ezRadioGroup'
import ezPanel from './ezPanel'
import ezSwitch from './ezSwitch'
import ezUpload from './ezUpload'
import ezScrollTab from './ezScrollTab'
import ezEditSelect from './ezEditSelect'
import ezDialogForm from './ezDialogForm'
import ezIcon from './ezIcon'
import ezLazyImg from './ezLazyImg'
import ezEditor from './ezEditor'

const components = [
    // ezUpload,
    // ezScrollTab,
    // ezEditSelect,
    // ezDialogForm,
    // ezIcon,
    // ezLazyImg,
    // ezEditor,
    ezButton,
    ezTable,
    ezCollapseText,
    ezMenu,
    ezSearch,
    ezEditInput,
    ezContainer,
    ezCollapseList,
    ezRadioGroup,
    ezSwitch,
    ezPanel
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