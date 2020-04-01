<template>
<footer class="footer">
    <div class="copyright">© 2016 PSDfreebies.com – All Right Reserved</div>
    <div class="design">
        <p>Design by:Psd</p>
    </div>
</footer>
</template>

<script>
export default {
    name:'FooterApp'
}
</script>>
<style lang="scss">
.footer{
    max-width: 1600px;
    height: 110px;
    background-color: #222222;
    padding-right: 150px;
    padding-left: 150px;
    display: flex;
    justify-content: space-between;
}
.copyright,
.design{
    color: #ffffff;
    padding-top: 30px;
}
.design>p{
    margin: 0;
}
</style>