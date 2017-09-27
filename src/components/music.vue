<template>
    <div class="music-main">
        <div class="open-music-content">
            <div class="m-song-disc">
                <div class="m-song-turn">
                    <div class="m-song-img">
                        <img src="../assets/images/109951163024374278.jpg">
                    </div>
                </div>
            </div>
            <article class="m-song-info">
                <header class="m-song-header">
                    <span class="m-song-sname">To Know You</span>
                    <span class="m-song-gap">-</span>
                    <span class="m-song-autr">Do As Infinity</span>
                </header>
            </article>
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
<style lang="scss" scoped>
    @mixin pseudo() {
        content: " ";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    .music-main{
        width: 100%;
        height: 100%;
        min-width: 320px;
        overflow: hidden;
        .open-music-content{
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: auto 100%; 
            -webkit-transform-origin: center top;
            transform-origin: center top;
            z-index: -1;
            @include pseudo();
            background: url(../assets/images/1111.jpg);
            opacity: 1;
            .m-song-disc{
                width: 300px;
                height: 300px;
                position: relative;
                margin: 0 auto;
                margin-top: 70px;
                &:after{
                    content:"";
                    position: absolute;
                    width: 96px;
                    height: 137px;
                    top: -70px;
                    left: 133px;
                    background-image:url(../assets/images/needle.png);
                    background-size: contain;
                    z-index: 3;
                }
                .m-song-turn{
                    width: 100%;
                    height: 100%;
                    &:after{
                        @include pseudo();
                        background-image: url(../assets/images/disc.png);
                        background-size: contain;
                        z-index: 2;
                    }
                    .m-song-img{
                        position: absolute;
                        top:50%;
                        left: 50%;
                        margin-left: -92px;
                        margin-top: -92px;
                        width: 184px;
                        height: 184px;
                        border-radius: 50%;
                        overflow: hidden;              
                        background-image: url(../assets/images/disc_default.png);
                        transform: translate(-50%,-50%);
                        transform-origin:50% 50%;
                        animation: circling 20s infinite linear;
                        
                        img{
                            width: 100%;
                            vertical-align: middle;
                        }
                    }
                }
            }
        }
    }
    .m-song-info{
        padding: 0 35px;
        margin-top: 25px;
        .m-song-header{
            font-size: 18px;
            color: white;
            text-align: center;
        }
    }

    @keyframes circling {
        0% {
            transform: rotate(0deg)
        }

        to {
            transform: rotate(1turn)
        }
    }

</style>