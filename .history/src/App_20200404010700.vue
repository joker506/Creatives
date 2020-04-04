<template>
  <div id="app">
<HeaderApp 
      :items=items
 />
<AdvantagesApp />
<TeamApp />
<FooterApp />

    <HelloWorld
    @clicks="clickUp($event)"   
       :msg=msg
       :counter=counter />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderApp from './components/HeaderApp.vue'
import AdvantagesApp from './components/AdvantagesApp.vue'
import TeamApp from './components/TeamApp.vue'
import FooterApp from './components/FooterApp.vue'

export default {
  name: 'App',
  data(){

    return{
    msg:"welcome",
    counter:10,

    items:[
           'Home',           
           'Pages',        
           'Features',           
           'Extensions',            
           'Tutorials',            
           'Contact us'
        ],
    }
    
  },
  components: {
    HelloWorld,
    AdvantagesApp,
    HeaderApp,
    TeamApp,
    FooterApp
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
  overflow: hidden;
  
}
</style>
