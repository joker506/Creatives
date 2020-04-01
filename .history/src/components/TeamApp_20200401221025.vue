<template>
<section class="team">
<div class="wrap">
<h2 class="team__title">Our Team</h2>
<p class="team__text">sales long tail influencer pitch release niche market.</p>
</div>

<div class="team-block">

<div class="staff__first">
    <img src="~@/assets/Layer81.png" alt="">
    <div class="staff-wrap">
    <h3 class="staff__title"> JOHN SNOW</h3>
    <span class="staff__prof">CEO</span>
    </div>
</div>
<div class="staff__first">
    <img src="~@/assets/Layer82.png" alt="">
    <div class="staff-wrap">
    <h3 class="staff__title">LADY SANSA</h3>
    <span class="staff__prof">WebDesigner</span>
    </div>
</div>
<div class="staff__first">
    <img src="~@/assets/Layer83.png" alt="">
    <div class="staff-wrap">
    <h3 class="staff__title">DAVID SMITH</h3>
    <span class="staff__prof">Photographer</span>
    </div>
</div>
<div class="staff__first">
    <img src="~@/assets/Layer84.png" alt="">
    <div class="staff-wrap">
    <h3 class="staff__title">LADY SANSA</h3>
    <span class="staff__prof">Photographer</span>
    </div>
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
padding-bottom: 10px;
background-color: #cabfbf;
}
.team__title{
margin: 0;
padding: 0;
padding-top: 140px;
font-size: 38px;
font-weight: 500;
line-height: 45px;
text-transform: uppercase;
position: relative;
&::before{
    content: '';
    position: absolute;
    top: 40px;
    left: 45%;
    width: 120px;
    height: 180px;
    background-image: url('~@/assets/T.png');
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: contain;
}
}
.team__text{
    margin-top: 140px;
    color: #222222;
font-family: "Gotham - Book";
font-size: 30px;
font-weight: 400;
line-height: 37px;
}
.team-block{
    margin-top: 70px;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

}
.staff__first {
    width: 270px;
    height: 480px;
    position: relative;
}
.staff-wrap{
    position: absolute;
    top: 360px;
    left: 25px;
    width: 216px;
    height: 117px;
    background-color: #ffffff;
    &:hover{
        border: 1px solid rgb(245, 243, 243);
        box-shadow: 0px 0px 10px 5px rgb(225, 229, 233);
    }
    }
.staff__title{
    color: #11749e;
font-family: Gotham;
font-size: 20px;
font-weight: 500;
line-height: 24px;
text-transform: uppercase;
}

.staff__prof{
    font-family: Gotham;
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
}
</style>