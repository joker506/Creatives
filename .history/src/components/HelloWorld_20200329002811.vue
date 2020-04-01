<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <button @click="clickDown">Chanhge</button>
   <p>{{counter}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    counter:Number
    
  },
  methods:{
    clickDown(){
      console.log("Your Click!")
      this.counter=emit("counterApp",this.counter)
      
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
