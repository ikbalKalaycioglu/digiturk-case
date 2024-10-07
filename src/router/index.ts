import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

function lazyLaod(view: string) {
  return () => import(`../views/${view}.vue`);
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: lazyLaod("Home"),
  },
  {
    path: "/movie/:id",
    component: lazyLaod("MovieDetail"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
