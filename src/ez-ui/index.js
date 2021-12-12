import ezButton from "./ezButton";
import ezUpload from './ezUpload'
const components = [ezButton, ezUpload]
export default function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};