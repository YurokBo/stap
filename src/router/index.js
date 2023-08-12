import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/feedback",
    name: "Feedback",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Feedback/Feedback.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: () => ({
    x: 0,
    y: 0,
    behavior: "smooth",
  }),
});

export default router;
