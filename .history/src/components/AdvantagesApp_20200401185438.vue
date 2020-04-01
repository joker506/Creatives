<template>
<section class="advantages">
    <div class="wrap">
        <img class="advantages-logo" src="~@/assets/W.png" alt="">
<h2 class="advantages__title">
    We Are An Awesome Agency
</h2>
    </div>
<div class="block__first">
    <img src="~@/assets/Ellipse1.png" alt="ellipse">
    <h3 class="block__title">Feature One</h3>
    <p class="block__text">We Are An Awesome Agency
</p>
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
color: #ffffff;
font-family: Gotham;
font-size: 38px;
font-weight: 500;
line-height: 25px;
text-transform: uppercase;
&::before{
    content: '';
    width:50px;
    height: 50px;
    background-image: url("~@/assets/W.png");
    background-color: red;
}
}

</style>