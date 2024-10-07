import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/styles/global.css";
import "primeicons/primeicons.css";
import SpatialNavigation from "@/SpatialNavigation.js";

window.addEventListener("load", function () {
  SpatialNavigation.init();
  SpatialNavigation.set({
    straightOnly: true,
    straightOverlapThreshold: 0.1,
  });
});

window.addEventListener("keydown", function (event) {
  event.preventDefault();
  event.stopPropagation();
  const key = event.keyCode || event.which;

  switch (key) {
    case 27:
      router.back();
      break;

    default:
      break;
  }
});

createApp(App).use(store).use(router).mount("#app");
