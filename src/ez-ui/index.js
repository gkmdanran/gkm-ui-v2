import ezButton from "./ezButton";
import ezUpload from './ezUpload'
import ezTable from './ezTable'
import ezCollapseText from './ezCollapseText'
import ezMenu from './ezMenu'
import ezSearch from './ezSearch'
const components = [ezButton, ezUpload, ezTable, ezCollapseText, ezMenu, ezSearch]
export default function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};