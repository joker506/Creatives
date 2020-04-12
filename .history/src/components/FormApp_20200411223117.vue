<template>
<div class="form">
<h2 class="form__title">We’d love to hear about your project.</h2>
<form action="">
    <label for="name">name</label>
    <input type="text"
            id="name"
            @blur="$v.name.$touch()"
            :class="{'input__wrong':$v.name.$error}"
            v-model="name"
            placeholder="Name">
    <input type="email">
    <input type="phone">
    <input type="textarea">
</form>
<p>{{$v.name}}</p>
</div>

</template>

<script>

import {required,minLength } from 'vuelidate/lib/validators'
export default {
name:'FormApp',
data(){
    return{
    name:" ",
    required:" ",
    }
},
validations:{
    name:{
    required,
    minLength:minLength(3)
}
}


</script>

<style>
.form{
    max-width: 1600px;
    height: 850px;
    background-image: url("~@/assets/form-logo.png");
    background-repeat: no-repeat;
    background-size: contain;
}
.input__wrong{
    box-shadow: 0 0 5px 5px pink;
}


</style>