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
    path: "/register",
    component: () => import("../layout/registerRoute"),
    children: [
      {
        path: "dispatcher",
        name: "dispatch",
        component: () => import("../views/dispatch.vue"),
      },
      {
        path: "customer",
        name: "customer",

        component: () => import("../views/customer.vue"),
      },
    ],
  },

  {
    path: "/dispatcher",
    name: "Dispatch",

    component: () => import("../views/dispatch.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
