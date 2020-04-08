<template>
    <HeaderApp  />
<AdvantagesApp />
<TeamApp />
<FooterApp />

    <HelloWorld
    @clicks="clickUp($event)"   
       :msg=msg
       :counter=counter />
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderApp from './components/HeaderApp.vue'
import AdvantagesApp from './components/AdvantagesApp.vue'
import TeamApp from './components/TeamApp.vue'
import FooterApp from './components/FooterApp.vue'

export default {
    
}
</script>