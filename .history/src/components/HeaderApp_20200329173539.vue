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
        <li class="social__item"><a href="#">A</a></li>
        <li class="social__item"><a href="#">A</a></li>
        <li class="social__item"><a href="#">A</a></li>
        <li class="social__item"><a href="#">A</a></li>
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
    padding-top: 20px;
    font-size: 18px;
    //background-image: url('src/assets/Layer96.jpg');
    background-repeat: no-repeat;
}

.header__top{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 94px;
    border-bottom: 3px solid #797979;

}
.wrapper{
    width: 1100px;
}
.logo {
    list-style: none;
    cursor: pointer;
    color: #000000 ;
    &>img{
    width:79px;
    height:75px;
    }
}

.main-nav{
border: 1px solid greenyellow;
}
.main-nav__items{
padding: 0;
margin: 0;
display: flex;
justify-content: space-between;
 width: 700px;
height: 85px;
}
.item{
    width: 105px;
    height: 83px;
    list-style: none;
    font-family: "Myriad Pro";
    font-size: 20px;
    font-weight: 400;
    color: #ffffff;
    background-color:aquamarine;
    &:hover{
        border-bottom: 3px solid #11749e;
    }
    &>a{
        text-decoration: none;
        color: #868686;
    &:hover{
        color: blue;
    }

    }
}
.social{

}
.social__items{
    display: flex;
    justify-content: space-between;
    list-style: none;

}
.social__item{
    text-decoration: none;
}

</style>