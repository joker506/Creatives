<template>

<header class="header">

<div class="header__top">
<a class="logo" href="#" >
    <img src="~@assets/logo1.png" alt="logo">
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

<h1 class="header__title">Creatives</h1>
<p class="text">Power by PSDfreebies.com</p>


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
    margin: 0;
    padding: 0;
    max-width: 1600px;
    height: 882px;
    padding-top: 20px;
    font-size: 18px;
    background-image: url("~@/assets/Layer96.jpg");
    background-repeat: no-repeat;
}

.header__top{
    display: flex;
    justify-content: space-between;
    height: 90px;
    border-bottom: 3px solid hsla(0, 0%, 47%, 0.5);
}
.wrapper{
    width: 1200px;
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
margin-left: 315px;
margin-right: 30px;
//border: 1px solid greenyellow;
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
    width: 100px;
    height: 83px;
    list-style: none;
    font-family: "Myriad Pro";
    font-size: 20px;
    font-weight: 400;
    color: #ffffff;
    &:hover{
        border-bottom: 6px solid #11749e;
    }
    &>a{
        display: block;
        padding-top: 30px;
        height: 50px;
        text-decoration: none;
        color: #868686;
    &:hover{
        color: blue;
    }

    }
}
.social{
width: 141px;
}
.social__items{
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    list-style: none;
}

.social__item{
}
.social__item>a{
    display: block;
    padding-top: 30px;
    height: 50px;
    color: #868686;
    text-decoration: none;
}

.header__main{
    height: 766px;
}

.header__title{
    margin: 0 auto;
    margin-top: 275px;
    
//opacity: -1;
//color: #f5f5f5;
font-family: Gotham;
font-size: 153px;
font-weight: 700;
text-transform: uppercase;
letter-spacing: -1.92px;
}

.text{
margin: 0 auto;
margin-top: 30px;
//opacity: -1;
color: #11749e;
font-family: Gotham;
font-size: 25px;
font-weight: 500;
line-height: 51.19px;
text-transform: uppercase;
/* Text style for "Power by P" */
letter-spacing: 7.88px;
}
</style>