<template>
    <div v-theme:column="'narrow'" id="show-blogs">
       <h1>List Blog Title</h1>
       <input type="text" v-model="search" placeholder="Search blogs">
       <div v-for="(blog, index) in filteredBlogs" :key="index" class="single-blog">
           <h2 v-rainbow>{{ blog.title | toUpperCase}}</h2>
       </div>
    </div>
</template>

<script>
// Imports
import searchMixin from '../mixins/searchMixin';

export default {
  data(){
     return{
       blogs: [],
       search: ''
     }
  },
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
          this.blogs = data.body.slice(0,10);
      })
  },
  mixins: [searchMixin],
  directives:{
      'rainbow': {
          bind(el){
            el.style.color = "#" + Math.random().toString(16).slice(2,8);
          }
      }
  },
  filters: {
      toUpperCase(value){
          return value.toUpperCase();
      }
   },
}



</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
input[type="text"]{
    display: block;
    width: 100%;
    padding: 8px;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
