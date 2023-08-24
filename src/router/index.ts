import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ContactsView from "@/views/ContactsView.vue";
import AccountView from "@/views/AccountView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/account",
    name: "account",
    meta: { requiresAuth: true },
    component: AccountView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      next({ path: "/", query: { redirect: to.fullPath } });
    }
  }
  next();
});

export default router;
