<template>
    <div class="music-main">
        <div>
            <mu-text-field label="搜索歌曲、歌手、专辑" labelFloat fullWidth />
        </div>
        <div>
            <mu-sub-header>热门标签</mu-sub-header>
            <mu-badge content="饿狼传说" primary slot="after"/>
            <mu-badge content="饿狼传说" primary slot="after"/>
            <mu-badge content="饿狼传说" primary slot="after"/>
            <mu-badge content="饿狼传说" primary slot="after"/>
            <mu-badge content="饿狼传说" primary slot="after"/>
            <mu-badge content="饿狼传说" primary slot="after"/>
            <mu-badge content="饿狼传说" primary slot="after"/>
        </div>
        <mu-list>
            <mu-list-item title="All mail">
                <mu-icon slot="right" value="info"/>
            </mu-list-item>
            <mu-list-item title="Trash">
                <mu-icon slot="right" value="info"/>
            </mu-list-item>
            <mu-list-item title="Spam">
                <mu-icon slot="right" value="info"/>
            </mu-list-item>
            <mu-list-item title="Follow up">
                <mu-icon slot="right" value="info"/>
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
<style scoped>
.gridlist-demo-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.gridlist-demo{
    width: 500px;
    height: 450px;
    overflow-y: auto;
}
</style>