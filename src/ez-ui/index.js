import ezButton from "./ezButton";
import ezUpload from './ezUpload'
import ezTable from './ezTable'
import ezCollapseText from './ezCollapseText'
import ezMenu from './ezMenu'
import ezSearch from './ezSearch'
import ezScrollTab from './ezScrollTab'
import ezEditInput from './ezEditInput'
import ezEditSelect from './ezEditSelect'
const components = [
    ezButton,
    ezUpload,
    ezTable,
    ezCollapseText,
    ezMenu,
    ezSearch,
    ezScrollTab,
    ezEditInput,
    ezEditSelect
]
export default function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};