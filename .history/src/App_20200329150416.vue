<template>
  <div id="app">
    <HelloWorld
    @clicks="clickUp($event)"   
       :msg=msg
       :counter=counter />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return{
    msg:"welcome",
    counter:10
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
  margin-top: 60px;
}
</style>
