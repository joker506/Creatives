<template>
<section class="advantages">
    <div class="wrap">
<h2 class="advantages__title">
    We Are An Awesome Agency
</h2>
    </div>
    <div class="advantages-block">
<div class="block__first">
   <Div><img src="~@/assets/Ellipse1.png" alt="ellipse"></Div>
    <h3 class="block__title">Feature One</h3>
    <p class="block__text">WAenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Donec id elit non mi porta gravida at eget metus.
</p>
</div>
<div class="block__first">
    <div><img src="~@/assets/Ellipse1.png" alt="ellipse"></div>
    <h3 class="block__title">Feature One</h3>
     <p class="block__text">Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Donec id elit non mi porta gravida at eget metus.
</p>
</div>
<div class="block__first">
    <div><img src="~@/assets/Ellipse1.png" alt="ellipse"></div>
    <h3 class="block__title">Feature One</h3>
     <p class="block__text">Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Donec id elit non mi porta gravida at eget metus.
</p>
</div>
<div class="block__first">
    <div><img src="~@/assets/Ellipse1.png" alt="ellipse"></div>
    <h3 class="block__title">Feature One</h3>
    <p class="block__text">Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Donec id elit non mi porta gravida at eget metus.
</p>
</div>
</div>

</section>
</template>

<script>
export default {
    name:'AdvantagesApp',
 
}
</script>

<style lang="scss">

.advantages{
max-width: 1600px;
height: 738px;
background-color: #11749e;
}
.wrap{
    margin: 0;
}
.advantages-logo{
margin-top: 108px;
    opacity: 0.3 ;
}

.advantages__title{
padding-top: 170px;
margin-bottom: 140px;
color: #ffffff;
font-family: Gotham;
font-size: 38px;
font-weight: 500;
line-height: 25px;
text-transform: uppercase;
position: relative;
&::before{
    content: '';
    position: absolute;
    top: 100px;
    left: 43%;
    width: 180px;
    height: 180px;
    opacity: 0.3;
    background-image: url("~@/assets/W.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0 0;
}
}
.advantages-block{
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.block__first{
    width: 258px;
    font-size: 15px;
font-weight: 400;
line-height: 24px;
    color: #ffffff;
    opacity: 0.8;
  

}
.block__first>div{
    opacity: 1;
    position: relative;
      &::before{
    content: '';
    position: absolute;
    top: 50px;
    left: 111px;
    width: 30px;
    height: 30px;
    background-image: url("~@/assets/Write.svg");
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: contain;
}
    }


.block__title{
    font-size: 18px;
font-weight: 500;
line-height: 36px;
text-transform: uppercase;
    
}

</style>