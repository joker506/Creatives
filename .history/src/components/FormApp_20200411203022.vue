<template>
<div class="form">
<h2 class="form__title">We’d love to hear about your project.</h2>
<form action="">
    <label for="name">name</label>
    <input type="text"
            id="name"
            v-model="name"
            placeholder="Name">
    <input type="email">
    <input type="phone">
    <input type="textarea">
</form>
</div>
</template>

<script>

export default {
name:'FormApp',
data(){
    name:" ",
},


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

</style>