import Vue from "vue";
import "./plugins/bootstrap-vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SliderSlider from "slither-slider";

Vue.use(SliderSlider);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
