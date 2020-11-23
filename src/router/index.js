import { createRouter, createWebHistory } from "vue-router";
import Repository from "../views/Repository.vue";
import DetailIssue from "../views/DetailIssue.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Repository
    },
    {
      path: "/detail-issue",
      component: DetailIssue
    }
  ]
});
export default router;
