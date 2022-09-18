import Hello from './component/Hello/Hello.vue';
import Hi from './component/Hi/Hi.vue';

const components = [
    Hello,
    Hi,
];
const componentName = [
  'Hello',
  'Hi',
];
const install = function (Vue) {
  components.forEach((component, index) => {
    Vue.component(componentName[index], component);
  });
};

const VueComponents = { install }

if (typeof window !== 'undefined') {
    window.VueComponents = VueComponents
}
export default VueComponents