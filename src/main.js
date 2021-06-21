import Vue from "vue";
import "./plugins/bootstrap-vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SliderSlider from "slither-slider";
// import VueTailwind from "tailwindcss"

Vue.use(SliderSlider);
Vue.config.productionTip = false;
Vue.component("pagination", require("laravel-vue-pagination"));

// const components = {

// }

// Vue.use(VueTailwind,components);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
