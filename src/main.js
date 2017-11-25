import Vue from 'vue'

import Navbar from './components/Navbar.vue'
import MainConteiner from './components/MainConteiner.vue'


Vue.component('navbar', Navbar);
Vue.component('main-conteiner', MainConteiner)



var app = new Vue({
  el: '#app',
  
})