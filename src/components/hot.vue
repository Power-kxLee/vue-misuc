<template>
    <div class="music-main">
        <div class="music-hot-header">
            <div class='music-hotopct'></div>
        </div>
        <mu-list>
            <mu-sub-header inset>Folders</mu-sub-header>
            <mu-list-item title="Photos" describeText="Jan 9, 2014">
                <mu-avatar icon="folder" slot="leftAvatar"/>
                <mu-icon value="info" slot="right"/>
            </mu-list-item>
            <mu-list-item title="Recipes" describeText="Jan 17, 2014">
                <mu-avatar icon="folder" slot="leftAvatar"/>
                <mu-icon value="info" slot="right"/>
            </mu-list-item>
            <mu-list-item title="Work" describeText="Jan 28, 2014">
                <mu-avatar icon="folder" slot="leftAvatar"/>
                <mu-icon value="info" slot="right"/>
            </mu-list-item>
        </mu-list>
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