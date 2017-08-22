import Vue from 'vue';
import Router from 'vue-router';

import Main from '@/layouts/Main';
import Home from '@/views/Home';
import Person from '@/views/Person';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
        },
        {
          path: '/person',
          name: 'person',
          component: Person,
        },
      ] },

  ],
});
