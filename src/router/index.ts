import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/AboutView.vue"),
  },
  {
    path: "/productPage",
    name: "productPage",
    component: () => import("../views/product/ProductPage.vue"),
  },
  {
    path: "/servicePage",
    name: "servicePage",
    component: () => import("../views/ServicePage.vue"),
  },
  {
    path: "/favourite",
    name: "favourite",
    component: () => import("@/views/profile/favouritePage.vue"),
  },
  {
    path: "/addToCart",
    name: "addToCart",
    component: () => import("../views/product/AddToCart.vue"),
  },

  //cart page
  {
    path: "/cartPage",
    name: "cartPage",
    component: () => import("@/views/product/ProductCart.vue"),
  },

  //noti page
  {
    path: "/notiPage",
    name: "notiPage",
    component: () => import("@/views/product/NotiPage.vue"),
  },
  //login page
  {
    path: "/loginPage",
    name: "loginPage",
    component: () => import("@/views/profile/LoginPage.vue"),
  },
  //contact page
  {
    path:'/contactPage',
    name:'contactPage',
    component:() => import('@/views/contact/ContactPage.vue'),
  },
  //register
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/profile/RegisterPage.vue"),
  },

  //account detail
  {
    path: "/accountDetail",
    name: "accountDetail",
    component: () => import("@/views/profile/EditAccount.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('token'); 
  if (loggedIn && to.path == '/loginPage') {
      next({ name: 'home' });
  } else {
    next();
  }
});

export default router;
