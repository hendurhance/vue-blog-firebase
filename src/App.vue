<template>
   <div>
      <app-header></app-header>
      <router-view></router-view>
   </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
   components: {
      'app-header': Header,
   },
  data(){
     return{
       
     }
  }
}


</script>

<style>
*{
    margin: 0;
    padding: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>
