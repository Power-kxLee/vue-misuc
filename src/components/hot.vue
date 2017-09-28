<template>
    <div class="music-main">
        <div class="music-hot-header">
            <div class='music-hotopct'></div>
        </div>
        <mu-list class="hot-content">
            <mu-list-item class="hot-list" v-for="(item, i) in misucList" :title="item.name" :describeText="singerName(item)" :to="{ path: '/music', query: { id: item.id }}">
                <div class="hotNumber" slot="leftAvatar">
                    {{i < 9 ? `0${i+1}` : (i+1) }}
                </div>
                <mu-icon value="play_circle_outline" slot="right"/>
            </mu-list-item>
        </mu-list>
    </div>
</template>
<script type="text/javascript">
    export default{
        data() {
            return {
                misucList: []
            };
        },
        mounted() {
            this.$ajax.get(`${this.$store.state.misucUrl}/top/list?idx=1`).then(d => {
                if (d.status === 200) {
                    this.misucList = d.data.result.tracks.slice(0, 20);
                }
            });
        },
        methods: {
            singerName(item) {
                let name = item.artists[0].name;
                let nameArray = [];
                if (item.artists.length > 0) {
                    item.artists.forEach((singer, i) => {
                        nameArray.push(singer.name);
                    });
                    name = nameArray.join('/');
                }
                return `${name}-${item.name}`;
            }
        }
    };
</script>
<style lang="scss">
    .hot-content{
        .hot-list{
            &:nth-child(n+4){
                .hotNumber{
                    color: #999;
                }
            }
        }
        .mu-item{
            padding-left: 50px;
            
            .hotNumber{
                font-size: 17px;
                color: #df3436;
            }
        }
    }
</style>
<style lang="scss" scoped>
    .music-hot-header{
        padding-top: 38.9%;
        background: url(../assets/images/hot_music_bg_2x.jpg) no-repeat;
        background-size: contain;
        position: relative;
        .music-hotopct{
            background: url(../assets/images/index_icon_2x.png) no-repeat;
            background-size: 166px 97px;
            width: 142px;
            height: 67px;
            background-position: -24px -30px;
            position: absolute;
            top:30px;
            left: 20px
        }
    }
    
</style>
