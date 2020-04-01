<template>
  <div id="app">
<HeaderApp />

    <HelloWorld
    @clicks="clickUp($event)"   
       :msg=msg
       :counter=counter />
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
    counter:10
    }
  },
  components: {
    HelloWorld,
    HeaderApp
  },
  methods:{
    clickUp(){
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
