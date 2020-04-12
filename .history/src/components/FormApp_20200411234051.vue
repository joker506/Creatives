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

    <label for="email">email</label>
    <input type="email"
           id="email"
           v-model="email"
           @blur="$v.email.$touch()"
           :class="{'input__wrong':$v.email.$error}"
           placeholder="Email"
           >
    <label for="phone">Phone</label>
    <input type="phone"
            id="phone"
            v-model="phone"
            @blur="$v.phone.$touch()"
            :class="{'input__wrong':$v.phone.$error}"
    
           
            >
    <input type="textarea">

    <div class="" v-if="!$v.name.required">Введи имя </div>
    <div class="" v-if="!$v.name.minLength">Имя должно содержать не менее {{4}}, Now {{name.length}}</div>

</form>
<p>{{$v.name}}</p>
</div>

</template>

<script>

import {required,email,phone,minLength } from 'vuelidate/lib/validators'

export default {
name:'FormApp',
data(){
    return{
    name:" ",
    required:" ",
    email:" "
    }
},

validations:{
    name:{
    required,
    minLength:minLength(4),
    //pattern:
},
    email:{
    required,
    email
},
    phone:{
        required,
        phone
    },
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