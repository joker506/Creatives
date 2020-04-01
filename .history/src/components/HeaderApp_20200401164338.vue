<template>

<header class="header">

<div class="header__top">
<a class="logo" href="#" >
    <img src="@/assets/Logo1.png" alt="logo">
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
        <li class="social__item social__item--fb">
            <a class="social__link" href="#"></a></li>
        <li class="social__item social__item--insta">
            <a class="social__link" href="#"></a></li>
        <li class="social__item social__item--teleg">
            <a class="social__link" href="#"></a></li>
        <li class="social__item social__item--vk">
            <a class="social__link" href="#"></a></li>
    </ul>
</div>

</div>
<div class="header__main">

<h1 class="header__title" >Creatives</h1>
<p class="text" v-font >Power by PSDfreebies.com</p>

<span class="btn__main">
    <a class="btn__main-link">scroll down</a>
</span>
</div>


</header>

</template>

<script>
export default {
    name:'HeaderApp',
   

    directives:{
        font:{
            bind(el){
            el.style.fontSize='50px'
            }
        },
        color:{
            bind(el){
                el.style.color='#ffffff'
            }
        }
    }
    
    
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
   /*  &:hover{
        color: blue;
    } */

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
    width: 20px;
    height: 20px;
    margin-top: 30px;
    position: relative;
    &--fb{
        background-image: url("~@/assets/facebook.svg");
        &:hover{
        background-image: url("~@/assets/fb-active.svg");
        }
    }
     &--insta{
        background-image: url("~@/assets/instagram.svg");
    }
     &--teleg{
        background-image: url("~@/assets/telegram.svg");
    }
     &--vk{
        background-image: url("~@/assets/vk.svg");
    }
    &::before{
        content: '';
        position: absolute;
        width: 30px;
        height: 30px;
         background-position: 0 0;
        background-repeat: no-repeat;
}
}


.social__link{
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

.btn__main{
    display: block;
    margin-top: 115px;
    position: relative;
  
}
.btn__main-link{
    color:beige;
    cursor: pointer;
      &::before{
        content: '';
        display: block;
        left: 50%;
        margin: auto;
        width: 70px;
        height: 70px;
        background-image: url("~@/assets/Ellipse2.svg");
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: cover;
        }
        &::after{
        display: block;
        left: 50%;
        margin: auto;
        width: 70px;
        height: 70px;
        background-image: url("~@/assets/el1.svg");
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: cover;
        }
    }
}
</style>