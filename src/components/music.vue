<template>
    <div class="music-main">
        <div class="open-music-content">
            <div class="m-song-disc">
                <div class="m-song-turn">
                    
                </div>
            </div>
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
            @include pseudo();
            background: url(../assets/images/1111.jpg);
            opacity: 1;
            .m-song-disc{
                width: 300px;
                height: 300px;
                position: relative;
                .m-song-turn{
                    width: 100%;
                    height: 100%;
                    &:after{
                        @include pseudo();
                    }
                }
            }
        }
    }
</style>