import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import NavBar from './components/Navbar'
import ImageSlider from './components/ImageSlider'

Vue.config.productionTip = false

Vue.component('navbar', NavBar)
Vue.component('image-slider', ImageSlider)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
