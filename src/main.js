import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import showBlogs from './components/showBlogs.vue'
import addBlog from './components/addBlog.vue'
import singleBlog from './components/singleBlog.vue'


Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
   mode: 'history',
   routes: [
    {
      path:'/',
      name: 'show-blog',
      component: showBlogs
  },
  {
      path:'/add',
      name: 'add-blog',
      component: addBlog
  },
  {
       path: '/blog/:id',
       name: 'single-blog',
       component: singleBlog
  }
   ]
});


Vue.directive('theme', {
  bind(el, binding){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1200px";
    }else if(binding.value == 'narrow'){
      el.style.maxWidth = "560px";
    }
    if(binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding ='30px'
    }
  }
});




//  Vue Instance
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
