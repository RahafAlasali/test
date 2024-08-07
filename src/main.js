import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/src/carousel.js'
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    AOS.init();
  },
}).$mount('#app')
