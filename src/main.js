import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

// A secondary Vue instance to communicate between components.
var EventHolder = new Vue()
Vue.prototype.EventHolder = EventHolder

// Global SCSS, this imports other assets.
require('./assets/global.scss')

// All components to be used inside the app.
// Views.
import Home from './components/Home.vue'
import Blog from './components/Blog.vue'
import Post from './components/Post.vue'
import Page from './components/Page.vue'

// Modular components.
import Loader from './components/Loader.vue'
import Navigation from './components/Navigation.vue'
import Pagination from './components/Pagination.vue'
import Search from './components/Search.vue'

Vue.component('loader', Loader)
Vue.component('navigation', Navigation)
Vue.component('pagination', Pagination)
Vue.component('search', Search)

// jQuery, for bootstrap.
global.jQuery = window.$ = require('jquery');
require('bootstrap');

// Moment.js, for time & date formatting.
import moment from 'moment'
window.moment = moment

// All routes to be used inside the app.
const routes = [
	{ path: '/', component: Home, name: 'home' },
	{ path: '/blog/:page', component: Blog, name: 'blog' },
	{ path: '/blog/post/:slug', component: Post, name: 'post' },
	{ path: '/:slug', component: Page, name: 'page' }
]

// The VueRouter with our defined routes.
const router = new VueRouter({
	routes
})

// The Vue instance.
const app = new Vue({
	router
}).$mount('#app')
