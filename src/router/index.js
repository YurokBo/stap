import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: () =>
      import(
        /* webpackChunkName: "feedback" */ '@/views/Feedback/Feedback.vue'
      ),
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () =>
      import(/* webpackChunkName: "privacy" */ '@/views/Privacy/Privacy.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'Home',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      };
    }
    return {
      x: 0,
      y: 0,
      behavior: 'smooth',
    };
  },
  routes,
});

export default router;
