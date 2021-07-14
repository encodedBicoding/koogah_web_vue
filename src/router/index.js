import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "landing",
    component: () => import("../views/index.vue"),
  },

  {
    path: "/dispatcher",
    name: "dispatch",
    component: () => import("../views/dispatch.vue"),
  },
  {
    path: "/customer",
    name: "customer",

    component: () => import("../views/customer.vue"),
  },

  {
    path: "/register",
    name: "register",

    component: () => import("../components/registerRoute"),
  },
  {
    path: "/privacy-policy",
    name: "privacy",

    component: () => import("../views/privacy.vue"),
  },
  {
    path: "/faq",
    name: "faq",

    component: () => import("../views/faq.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
