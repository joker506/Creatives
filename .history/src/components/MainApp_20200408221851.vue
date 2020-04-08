<template>
<div>
    <HeaderApp  />
<AdvantagesApp />
<TeamApp />
<FooterApp />
</div>
</template>


<script>
import HeaderApp from './components/HeaderApp.vue'
import AdvantagesApp from './components/AdvantagesApp.vue'
import TeamApp from './components/TeamApp.vue'
import FooterApp from './components/FooterApp.vue'

export default {
    name:'MainApp',
    
    components: {
    MainApp,
    HelloWorld,
    AdvantagesApp,
    HeaderApp,
    TeamApp,
    FooterApp
  },
}
</script>