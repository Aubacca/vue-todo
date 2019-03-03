import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home';
import TodosPage from './views/TodosPage';
import PhotosPage from '@/views/PhotosPage';
import UsersPage from '@/views/UsersPage'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/todos',
      name: 'todos',
      component: TodosPage
    },
    {
      path: '/photos',
      name: 'photos',
      component: PhotosPage
    },
    {
      path: '/users',
      name: 'users',
      component: UsersPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/AboutPage.vue')
    },
    {
      path: '**',
      component: Home
    }
  ]
});
