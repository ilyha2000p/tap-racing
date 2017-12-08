import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from './App.vue'

import NickForm from './components/mainContainer/NickForm.vue'
import Rooms from './components/mainContainer/Rooms.vue'
import Game from './components/mainContainer/Game.vue'


const routes = [
	{path: '/', component: NickForm},
	{path: '/rooms', component: Rooms},
	{path: '/game', component: Game}
]

const router = new VueRouter({
	routes
})
var app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});