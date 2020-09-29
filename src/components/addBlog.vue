<template>
  <div id="add-blog">
     <h2>Add a New Blog Post</h2>
     <form v-if="!submitted">
       <label>Blog Title:</label>
       <input type="text" v-model.lazy="blog.title" required>
       <label>Blog Content</label>
       <textarea v-model.lazy="blog.content"></textarea>
       <div id="checkboxes">
           <p>Blog Categories:</p>
           <label>Technology</label>
           <input type="checkbox" value="Technology" v-model="blog.categories">
           <label>Entertainment</label>
           <input type="checkbox" value="Entertainment" v-model="blog.categories">
           <label>Sport</label>
           <input type="checkbox" value="Sport" v-model="blog.categories">
           <label>Politics</label>
           <input type="checkbox" value="Politcs" v-model="blog.categories">
       </div>
       <label>Author:</label>
       <select v-model="blog.author">
           <option v-for="(author, index) in authors" :key="index"> {{author}} </option>
       </select>
       <hr>
       <button v-on:click.prevent="post">Add Blog Post</button>
     </form>
     <div v-if="submitted">
         <h3>Blog Post added successfully</h3>
     </div>
     <div id="preview">
       <h3>Preview Blog</h3>
       <p>Blog title:{{blog.title}}</p>
       <p>Blog content:</p>
       <p>{{blog.content}}</p>
       <p>Blog categories:</p>
       <ul>
           <li v-for="(category, index) in blog.categories" :key="index"> {{category}} </li>
       </ul>
       <p>Author: {{blog.author}}</p>
     </div>
    <add-blog></add-blog>
   </div>
</template>

<script>


export default {
  data(){
     return{
        blog:{
            title: "",
            content: "",
            categories: [
 
            ],
            author: ""
        },
        authors: ['Administrator', 'Editor Joe', 'Editor Quan'],
        submitted: false,
     }
  },
  methods: {
      post: function(){
          this.$http.post('https://vue-blog-00.firebaseio.com/posts.json', this.blog).then(function(data){
              console.log(data);
              this.submitted = true;
          })
      }
  }
}


</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>
