import { createWebHistory, createRouter } from "vue-router";

// All Pages
import BlogPageOne from "../components/Pages/BlogPageOne";
import BlogPageTwo from "../components/Pages/BlogPageTwo";
import BlogPageThree from "../components/Pages/BlogPageThree";
import BlogDetailsPage from "../components/Pages/BlogDetailsPage";
import ContactPage from "../components/Pages/ContactPage";

const routes = [
  { path: "/blog-grid", component: BlogPageOne },
  { path: "/blog-right-sidebar", component: BlogPageTwo },
  { path: "/blog-left-sidebar", component: BlogPageThree },
  { path: "/blog-details/:slug", component: BlogDetailsPage },
  { path: "/contact", component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
