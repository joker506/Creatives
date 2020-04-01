<template>
  <div id="app">
    <HelloWorld
    @update="clickUp($event)"   
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
    counter:0
    }
  },
  components: {
    HelloWorld
  },
  methods:{
    clickUp(event){
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
