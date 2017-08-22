// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'font-awesome/css/font-awesome.min.css';

import Vue from 'vue';
import App from './App';
import router from './router';

import './assets/theme.scss';

Vue.config.productionTip = false;

// Vue.directive('focus', {
//   inserted(el) {
//     console.log(el);
//     el.focus();
//   },
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
