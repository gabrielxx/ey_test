import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueLazyload from 'vue-lazyload'


Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'not-available.jpg',
  loading: 'loading-spin.svg',
  attempt: 1,
  lazyComponent : true,
  listenEvents: [ 'scroll' ]
});
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
