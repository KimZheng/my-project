import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../components/home.vue'
import Post from '../components/post.vue';
import Posts from '../components/posts.vue';
import Gallery from '../components/gallery.vue';
import About from '../components/about.vue'

export default new VueRouter({
	routes:[
		{path:"/home",component:Home},
		{path:"/post",component:Post},
		{path:"/posts",component:Posts},
		{path:"/gallery",component:Gallery},
		{path:"/about",component:About}
	]
});