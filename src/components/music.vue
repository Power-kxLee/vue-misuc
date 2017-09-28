<template>
    <div class="music-main">
        <audio :src="musicUrl" ref="audio" autoplay="autoplay">
        </audio>
        <div class="open-music-content" :style="`background-image: url(${this.musicImg})`">
            <div class='open-music-warp'>
                <div class="m-song-disc">
                    <div class="m-song-turn">
                        <div class="m-song-img">
                            <img :src="musicImg">
                        </div>
                    </div>
                </div>
                <article class="m-song-info">
                    <header class="m-song-header">
                        <span class="m-song-sname">{{musicName}}</span>
                        <span class="m-song-gap">-</span>
                        <span class="m-song-autr">{{singerName}}</span>
                    </header>
                    <section>
                        <p class="m-song-lritem">{{lrc}}</p>
                    </section>
                </article>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        data() {
            return {
                musicImg: '',
                musicName: '',
                musicUrl: '',
                singerName: '',
                lrc: ''
            };
        },
        mounted() {
            let lyricsArray = {};
            let audioDom = this.$refs.audio;
            audioDom.ontimeupdate = () =>{
                // console.log(audioDom.duration);
                let currentTime = parseFloat(audioDom.currentTime.toFixed(0));
                if (lyricsArray[currentTime]) {
                    console.log(lyricsArray[currentTime]);
                    this.lrc = lyricsArray[currentTime];
                }
            };
            let singerNameArray = [];
            this.$ajax.get(`${this.$store.state.misucUrl}/music/url?id=${this.$route.query.id}`).then(d => {
                // console.log(d);
                if (d.status === 200) {
                    this.musicUrl = d.data.data[0].url;
                }
            });
            this.$ajax.get(`${this.$store.state.misucUrl}/song/detail?ids=${this.$route.query.id}`).then(d => {
                // console.log(d);
                let songs = d.data.songs[0];
                if (d.status === 200) {
                    this.musicName = songs.name;
                    this.musicImg = songs.al.picUrl;
                    this.singerName = songs.ar[0].name;
                    if (songs.ar.length > 0) {

                        songs.ar.forEach((val, i) => {
                            singerNameArray.push(val.name);
                        });
                        this.singerName = singerNameArray.join('/');
                    }
                    // this.musicUrl = d.data.data[0].url;
                }
            });
            this.$ajax.get(`${this.$store.state.misucUrl}/lyric?id=${this.$route.query.id}`).then(d => {
                console.log(d);
                // console.log(d.data.lrc.lyric.split('\n'));
                if (d.status === 200) {
                    d.data.lrc.lyric.split('\n').forEach((lyrics, i)=>{
                        if (lyrics.length > 0) {
                            let lyricsTime = lyrics.split(']')[0].substr(1).split(':');
                            let second = Number(lyricsTime[0] * 60) + Number(lyricsTime[1]);
                            lyricsArray[second.toFixed(0) ] = lyrics.split(']')[1];
                        }
                    });
                    // console.log(lyricsArray);
                    this.lrc = lyricsArray[0];
                    
                }
            });
            console.log(this.$route.query.id);
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
            opacity: 1;
            .open-music-warp{
                position: relative;
                z-index: 2;
            }
            &:after{
                @include pseudo();
                background-color: rgba(0,0,0,.5);
            }
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
                    &:before{
                        @include pseudo(); 
                        background-image:url(../assets/images/disc_light-ip6.png);
                        background-size: contain;
                        z-index: 3;
                    }
                    .m-song-img{
                        position: absolute;
                        top:50%;
                        left: 50%;
                        margin-left: -95px;
                        margin-top: -95px;
                        width: 190px;
                        height: 190px;
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
        .m-song-lritem{
            font-size: 16px;
            text-align: center;
            color: white;
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