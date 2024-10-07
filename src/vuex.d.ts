import { Store } from "@/store/index";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store;
  }
}
import VueRouter, { Router } from "vue-router";
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $router: Router;
    $route: VueRouter;
  }
}
