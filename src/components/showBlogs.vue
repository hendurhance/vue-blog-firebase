<template>
    <div v-theme:column="'narrow'" id="show-blogs">
       <h1>All Blog Articles</h1>
       <input type="text" v-model="search" placeholder="Search blogs">
       <div v-for="(blog, index) in filteredBlogs" :key="index" class="single-blog">
           <router-link v-decoration v-bind:to="'/blog/' + blog.id"><h2 v-rainbow>{{ blog.title | toUppercase }}</h2></router-link>
           <article>{{ blog.content | snippetArticle }}</article>
       </div>
    </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {

  data(){
     return{
       blogs: [],
       search: ''
     }
  },
  methods: {
     
  },
  created(){
      this.$http.get('https://vue-blog-00.firebaseio.com/posts.json').then(function(data){
          return data.json();
      }).then(function(data){
          var blogsArray = [];
          for (let key in data){
              data[key].id = key
              blogsArray.push(data[key]);
          }
          this.blogs = blogsArray;
      })
  },
  mixins: [searchMixin],
  filters: {
      toUppercase: function(value){
          return value.toUpperCase()
      },
      snippetArticle: function(value){
          return value.slice(0,100) + '....';
      }
  },
  directives: {
      'rainbow' :{
          bind(el){
              el.style.color = "#" + Math.random().toString().slice(2,8);
          }
      },
      'decoration': {
          bind(el){
              el.style.textDecoration = 'none';
          }
      }
  }
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
a h2{
    text-decoration: none;
}
</style>
