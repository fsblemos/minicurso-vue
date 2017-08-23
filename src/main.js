// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'font-awesome/css/font-awesome.min.css';

import Vue from 'vue';
import App from './App';
import router from './router';

import './assets/theme.scss';

Vue.config.productionTip = false;

Vue.directive('click-outside', {
  bind(el, binding, vnode) {
    el.event = (event) => {
      if (el !== event.target && !el.contains(event.target)) {
        vnode.context[binding.expression](event);
      }
    };

    document.body.addEventListener('click', el.event);
  },
  unbind(el) {
    document.body.removeEventListener('click', el.event);
  },
});

Vue.directive('focus', {
  inserted: (el, binding) => {
    if (binding.value) {
      el.focus();
    }
  },
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
