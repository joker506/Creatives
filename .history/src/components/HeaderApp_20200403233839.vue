<template>

<header class="header">

<div class="header__top">
<a class="logo" href="#" >
    <img src="@/assets/Logo1.png" alt="logo">
</a>
<nav class="main-nav">
    <ul class="main-nav__items">
        <li class="item" v-for="item in items" :key="item" >
            <a href="#">{{item}}</a> </li>
             <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
     
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
<p class="text"><a href="Power by PSDfreebies.com"> Power by PSDfreebies.com</a></p>

<span class="btn__main">
    <a @click="scrollDown" class="btn__main-link" href="#team">scroll down</a>
</span>
</div>


</header>

</template>

<script>

export default {
    name:'HeaderApp',
 data(){
  items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
 },
    methods:{
        scrollDown(){
        console.log("scroll")
        }
  
      },
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
    padding-top: 20px;
    font-size: 18px;
    background-image: url("~@/assets/Layer96.jpg");
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
}

.header__top{
    padding-right: 15px;
    padding-left: 15px;
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
margin-left: 220px;
margin-right: 40px;
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
/* 
.header__main{
    height: 766px;
} */

.header__title{
    margin: 0 auto;
    margin-top: 130px;
    font-family: Gotham;
    font-size: 153px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -1.92px;
}

.text{
margin: 0 auto;
margin-top: 30px;
color: #11749e;
font-family: Gotham;
font-size: 25px;
font-weight: 500;
line-height: 51.19px;
text-transform: uppercase;
letter-spacing: 7.88px;
}
.text>a{
    text-decoration: none;
    color: bisque;
}
.btn__main{
    display: block;
    margin-top: 115px;
    padding-bottom: 115px;
    position: relative;
  
}
.btn__main-link{
    color:beige;
    cursor: pointer;    
    font-weight: 500;
    line-height: 22px;
    text-transform: capitalize;
        &::after{
        content: '';
        display: block;
        left: 50%;
        margin: auto;
        margin-top: 15px;
        width: 65px;
        height: 65px;
        background-image: url("~@/assets/chevron.svg");
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: cover;
        }
        &:hover{
color: #11749e;        
}
}
        


</style>