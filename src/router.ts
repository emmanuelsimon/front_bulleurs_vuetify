import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
{
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("./components/view/BulleursHome.vue"),
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;