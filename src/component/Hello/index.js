import Hello from './Hello.vue';

Hello.install = function (Vue) {
  Vue.component('Hello', Hello);
};

export default Hello;
