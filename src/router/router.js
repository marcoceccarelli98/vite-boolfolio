import { createRouter, createWebHistory } from "vue-router";
import AppMain from "../components/AppMain.vue";
import ProjectDetail from "../components/ProjectDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: AppMain,
  },
  {
    path: "/projects/:slug",
    name: "ProjectDetail",
    component: ProjectDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
