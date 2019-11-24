import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Spell from './views/Spell.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/spell/:id',
      name: 'spell',
      component: Spell,
    },
  ],
});
