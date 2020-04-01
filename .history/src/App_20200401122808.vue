<template>
  <div id="app">
<HeaderApp />

    <HelloWorld
    @clicks="clickUp($event)"   
       :msg=msg
       :counter=counter />
          <ul>
   <li :v-for="name of names">{{name}}</li>
   <input type="text" v-model="searchName">
   </ul>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderApp from './components/HeaderApp.vue'

export default {
  name: 'App',
  data(){
    return{
    msg:"welcome",
    counter:10,
     names:['vlad','max','elena'],
      searchName:''
    }
  },
  components: {
    HelloWorld,
    HeaderApp
  },
  methods:{
    clickUp(event){
      console.log("click")
      this.counter=event
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
