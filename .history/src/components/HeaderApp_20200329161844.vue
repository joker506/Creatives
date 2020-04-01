<template>

<header class="header">

<div class="header__top">

<a class="logo" href="#">
    <img src="src/assets/logo1.png" alt="logo">
</a>

<nav class="main-nav">
    <ul class="main-nav__items">
        <li class="item">
            <a href="#">Home</a> </li>
        <li class="item">
            <a href="#">Pages</a> </li>
        <li class="item">
            <a href="#">Features</a> </li>
        <li class="item">
            <a href="#">Extensions</a> </li>
        <li class="item">
            <a href="#">Tutorials</a> </li>
        <li class="item">
            <a href="#">Contact us</a> </li>
    </ul>
</nav>

<div class="social">
    <ul class="social__items">
        <li class="social__item"><a href="#"></a></li>
        <li class="social__item"><a href="#"></a></li>
        <li class="social__item"><a href="#"></a></li>
        <li class="social__item"><a href="#"></a></li>
    </ul>
</div>

</div>
<div class="header__main">


</div>


</header>

</template>

<script>
export default {
    name:'HeaderApp',
    
}
</script>

<style lang="scss">
.header{
    font-size: 18px;
    //background-image: url('src/assets/Layer96.jpg');
    background-repeat: no-repeat;
}

.header__top{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 94px;
    border: 1px solid blue;

}


</style>