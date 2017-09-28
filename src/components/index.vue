<template>
    <div class="music-main">
        <div class="musice-content">
            <div class="gridlist-demo-container">
                <mu-grid-list class="gridlist-demo" :cols="3">
                    <mu-sub-header>推荐歌单</mu-sub-header>
                    <mu-grid-tile v-for="tile, index in RECsongList" :key="index">
                        <img :src="tile.picUrl"/>
                        <mu-flat-button class="headset" :label="songPlayCount(tile)" icon="headset"  color="#FFF"/>
                        <span slot="subTitle">by <b>{{tile.copywriter}}</b></span>
                    </mu-grid-tile>
                </mu-grid-list>
            </div>
            <mu-list>
                <mu-sub-header >推荐音乐</mu-sub-header>
                <mu-list-item v-for="item in RECmisuc" :title="item.name" :describeText="misucDescribeText(item)" :to="{ path: '/music', query: { id: item.id }}">
                    <div class='RECimg' slot="leftAvatar">
                        <img :src="item.song.album.picUrl" :alt="item.song.album.name">
                    </div>
                    <mu-icon value="play_circle_outline" slot="right"/>
                </mu-list-item>
            </mu-list>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        data() {
            return {
                RECsongList: [],
                RECmisuc: []
            };
        },
        mounted() {
            this.$ajax.get(`${this.$store.state.misucUrl}/personalized/newsong`).then(d => {
                let data = d.data;
                if (d.status === 200) {
                    this.RECmisuc = data.result;
                }
            }).catch(err => {
                console.log('推荐音乐的接口报错', err);
            });
            
            this.$ajax.get(`${this.$store.state.misucUrl}/personalized`).then(d => {
                if (d.status === 200) {
                    this.RECsongList = d.data.result;
                }
            }).catch(err => {
                console.log('推荐歌单的接口报错', err);
            });
        },
        methods: {
            songPlayCount(tile) {
                let playCount = tile.playCount + '';
                if (tile.playCount > 100000) {
                    playCount = `${parseFloat(tile.playCount / 10000).toFixed(1)}万`;
                }
                return playCount;
            },
            misucDescribeText(item) {
                let name = [];
                item.song.artists.forEach((value, i) =>{
                    name.push(value.name);
                });
                return name.join('/');
            }
        }
    };
</script>
<style lang="scss" scoped>
.gridlist-demo-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .gridlist-demo{
        width: 500px;
        height: 450px;
        overflow-y: auto;
    }
}
.RECimg{
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 50%;
    img{
        width: 100%;
        height: 100%;
        display: block;
    }
}
.mu-grid-tile{
    .headset{
        font-size: 12px!important;
        position: absolute;
        top: 0px;
        right: 0px;
        width: 100%;
        background-image: linear-gradient(180deg,rgba(0,0,0,.2),transparent);
        .mu-flat-button-wrapper{
            background: red;
        }
    }
    .mu-icon{
        font-size: 12px;
    }
}
</style>
<style>
    
</style>