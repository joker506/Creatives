<template>
<section class="advantages">
    <div class="wrap">
<h2 class="advantages__title">
    We Are An Awesome Agency
</h2>
    </div>
    <div class="advantages-block">
<div class="block__first">
    <img src="~@/assets/Ellipse1.png" alt="ellipse">
    <h3 class="block__title">Feature One</h3>
    <p class="block__text">We Are An Awesome Agency
</p>
</div>
<div class="block__first">
    <img src="~@/assets/Ellipse1.png" alt="ellipse">
    <h3 class="block__title">Feature One</h3>
    <p class="block__text">We Are An Awesome Agency
</p>
</div>
<div class="block__first">
    <img src="~@/assets/Ellipse1.png" alt="ellipse">
    <h3 class="block__title">Feature One</h3>
    <p class="block__text">We Are An Awesome Agency
</p>
</div>
<div class="block__first">
    <img src="~@/assets/Ellipse1.png" alt="ellipse">
    <h3 class="block__title">Feature One</h3>
    <p class="block__text">We Are An Awesome Agency
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

</style>