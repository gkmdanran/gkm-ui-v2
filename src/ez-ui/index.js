import ezButton from "./ezButton";
import ezUpload from './ezUpload'
import ezTable from './ezTable'
import ezCollapseText from './ezCollapseText'
import ezMenu from './ezMenu'
ezCollapseText
const components = [ezButton, ezUpload, ezTable, ezCollapseText, ezMenu]
export default function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};