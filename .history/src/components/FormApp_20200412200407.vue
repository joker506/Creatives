<template>
<div class="modal">
<h2 class="modal__title">We’d love to hear about your project.</h2>

<form class="form" action="" 
            @submit.prevent="onSubmit">
    <label for="name">name</label>
    <input type="text"
    id="name"
    v-model="name"
    @blur="$v.name.$touch()"
    :class="{'input__wrong':$v.name.$error}"
    placeholder="Name">

    <label for="email">email</label>
    <input type="email"
           id="email"
           v-model="email"
           @blur="$v.email.$touch()"
           :class="{'input__wrong':$v.email.$error}"
           placeholder="Email"
           >
    <label for="phone">phone</label>
    <input type="" 
            name="phone" 
            id="phone"
            @blur="$v.phone.$touch()"
            v-model="phone"
             
            placeholder="Phone">

<!--     <div class="" v-if="!$v.name.required">Введи имя </div>
    <div class="" v-if="!$v.name.minLength">Имя должно содержать не менее {{4}}, Now {{name.length}}</div>
 -->
<button class="form__btn" type="submit" 
            :disabled="$v.$invalid">submit</button>
</form>
</div>

</template>

<script>

import {required,email,minLength } from 'vuelidate/lib/validators'

export default {
name:'FormApp',
data(){
    return{
    name:'',
    email:'',
    phone:''
    }
},
methods:{
onSubmit(){
console.log(this.email)
}
},

validations:{
    email:{
    required,
    email
},
    name:{
        required,
        minLength:minLength(4)
    },
    phone:{
        required,
        minLength:minLength(10)
    }
  
}
}

</script>

<style lang="scss">

.form{
    width: 1200px;
    margin: 0 auto;
}
.form>input{
    width: 370px;
    box-sizing: border-box;
    height: 48px;
    padding-left: 25px;
    color: aliceblue;
    background-color: transparent;
    margin-right: 30px;
    margin-bottom: 35px;
    &:hover{
        box-shadow: 0 0 5px 5px #59659b;
        cursor: pointer;
    }

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
    background-size: cover;
}
.input__wrong{
    box-shadow: 0 0 5px 5px pink;
}
.form>input[type=textarea]{
    box-sizing: border-box;
    padding: 0;
    width: 1170px;
    height: 150px;
    padding-top: 25px;
    padding-left: 25px;
    resize: none;
    overflow: auto;
    margin-bottom: 40px;
}
.form__btn{
    width: 230px;
    height: 60px;
    line-height: 24px;
    font-size: 24px;
    box-sizing: border-box;
    color: aliceblue;
    background-color: #11749e;
    border:none;
    cursor: pointer;
    text-transform: uppercase;
    margin-bottom: 100px;
        &:disabled{
            background-color: rgb(131, 129, 129);
        }
    }


</style>