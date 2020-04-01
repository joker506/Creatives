<template>
  <div class="hello">
    <h1>{{ msg }} </h1>
   <button @click="clickDown">Change</button>
   <p>{{counter}}</p>
   <ul>
   <li v-for="name of names">{{name}}</li>
   </ul>
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
      this.$emit("clicks",this.counter+1)
      
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
p{
  color:rgb(3, 156, 62);
}
</style>
