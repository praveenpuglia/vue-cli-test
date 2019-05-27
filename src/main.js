import Vue from "vue";
import App from "./App.vue";
// Lego blocks setup
import { BCopyPlugin } from "@vue-lego/blocks";
Vue.use(BCopyPlugin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
