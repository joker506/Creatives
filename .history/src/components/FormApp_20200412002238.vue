<template>
<div class="modal">
<h2 class="modal__title">We’d love to hear about your project.</h2>

<form class="form" action="">
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
            placeholder="Phone"
           >
    <label for="letter">Message</label>
    <input type="textarea"
            id="letter"
            v-model="letter"
            @blur="$v.letter.$touch()"
            placeholder="Message"
            >

    <div class="" v-if="!$v.name.required">Введи имя </div>
    <div class="" v-if="!$v.name.minLength">Имя должно содержать не менее {{4}}, Now {{name.length}}</div>

<button class="form__btn" type="submit">submit</button>
</form>
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
    email:" ",
    phone:" "
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
        phone,
    },
    letter:{
        required,
    }
}
}

</script>

<style>
.form{
    width: 1100px;
    margin: 0 auto;
}
.form>input{
    width: 370px;
    height: 50px;
    padding-left:25px;

    background-color: transparent;
}
.form>input[type=textarea]{
    padding: 0px;
    width:1100px;
    height: 150px;
    padding-top: 25px;
}
.modal__title{
    margin: 0;padding: 0;
    padding-top: 225px;
    padding-bottom: 145px;
    color: aliceblue;
    text-transform: uppercase;
}
label{
    display: none;
}
.modal{
    margin: 0;padding: 0;
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