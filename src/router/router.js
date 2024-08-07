import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../components/AppHome.vue";
import AppProjects from "../components/AppProjects.vue";
import ProjectDetail from "../components/ProjectDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: AppHome,
  },
  {
    path: "/projects",
    name: "Projects",
    component: AppProjects,
  },
  {
    path: "/projects/:slug",
    name: "detail",
    component: ProjectDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
