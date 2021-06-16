import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import desi from "./assets/css/index.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tooltip, Toast, Popover } from "bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import swiper from "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import icon from "./assets/vendor/boxicons/css/boxicons.min.css";
import axios from "axios";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

Vue.config.productionTip = false;

window.axios = axios;

Vue.use(VueToast, {
  // One of the options
  position: "top-right",
  duration: 10000,
});

AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  mirror: false,
});

/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all);
  if (selectEl) {
    if (all) {
      selectEl.forEach((e) => e.addEventListener(type, listener));
    } else {
      selectEl.addEventListener(type, listener);
    }
  }
};

/**
 * Mobile nav toggle
 */
on("click", ".mobile-nav-toggle", function () {
  select("#navbar").classList.toggle("navbar-mobile");
  this.classList.toggle("bi-list");
  this.classList.toggle("bi-x");
});

new Vue({
  router,
  store,
  desi,
  swiper,
  icon,
  AOS,
  Toast,
  Tooltip,
  Popover,
  VueToast,
  render: (h) => h(App),
}).$mount("#app");
