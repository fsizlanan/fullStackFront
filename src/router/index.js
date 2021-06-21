import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Anasayfa from "../views/AnaSayfa.vue";
import Kategori from "../views/Kategori.vue";
import Urun from "../views/Urun.vue";
import Search from "../components/SearchComponent.vue";
import Kaydol from "../components/kullanici/KaydolComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Anasayfa",
    component: Anasayfa
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/anasayfa",
    name: "AnaSayfa",
    component: Anasayfa
  },
  {
    path: "/kategori/:slug",
    name: "Kategori",
    component: Kategori,
    props: true
  },
  {
    path: "/urun/:slug",
    name: "Urun",
    component: Urun,
    props: true
  },
  {
    path : "/urun_ara",
    name : "Search",
    component : Search,
    props : true
  },
  {
    path : "/kaydol",
    name : "Kaydol",
    component : Kaydol,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
