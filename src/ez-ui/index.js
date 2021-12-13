import ezButton from "./ezButton";
import ezUpload from './ezUpload'
import ezTable from './ezTable'
ezTable
const components = [ezButton, ezUpload, ezTable]
export default function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};