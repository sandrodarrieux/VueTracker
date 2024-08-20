import Tasks from "../views/Tasks.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const route: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Tasks",
    component: Tasks,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: route,
});

export default router;
