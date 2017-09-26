<template>
    <div class="music-main">
        <div class="open-music-content">
            
        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        data() {
            return {
            };
        }
    };
</script>
<style>
    #app{
        height: 100%;
        padding-top: 0px;
    }
</style>
<style lang="scss" scoped>
    .music-main{
        position: absolute;
        top:0px;
        left: 0px;
        width: 100%;
        height: 100%;
        min-width: 320px;
        overflow: hidden;
        .open-music-content{

            background-position: 50%;
            background-repeat: no-repeat;
            background-size: auto 100%;
            -webkit-transform: scale(1.5);
            transform: scale(1.5);
            -webkit-transform-origin: center top;
            transform-origin: center top;
            z-index: -1;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            background: url(../assets/images/1111.jpg);
            opacity: 1;
        }
    }
</style>