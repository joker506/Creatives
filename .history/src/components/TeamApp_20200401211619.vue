<template>
<section class="team">
<div class="wrap">
<h2 class="team__title">Our Team</h2>
<p class="team__text">sales long tail influencer pitch release niche market.</p>
</div>
<div class="team-block">

<div class="staff__first">
    <img src="~@/assets/Layer81.png" alt="">
    <h3 JOHN SNOW></h3>
    <span>CEO</span>
</div>
    </div>

    </section>
</template>

<script>
export default {
    name:'TeamApp',
}
</script>
<style lang="scss">
.team{
    margin: 0;
    padding: 0;
    max-width: 1600px;
height: 738px;
background-color: #ffffff;
}
.team__title{
    margin-top: 135px;
font-size: 38px;
font-weight: 500;
line-height: 45px;
text-transform: uppercase;
position: relative;
&::before{
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100px;
    height: 100px;
    background-image: url('~@/assets/T.png');
}
}

</style>