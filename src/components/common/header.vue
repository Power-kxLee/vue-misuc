<template>
    <header class="appHeader">
        <mu-appbar title="网易云音乐">
        </mu-appbar>
        <mu-tabs :value="activeTab" @change="handleTabChange">
            <mu-tab value="/index" title="推荐音乐"/>
            <mu-tab value="/hot" title="热歌榜"/>
            <mu-tab value="/query" title="搜索"/>
        </mu-tabs>
    </header>
</template>
<script type="text/javascript">
    export default{
        data() {
            return {
                activeTab: '/index'
            };  
        },
        created() {
            this.activeTab = this.$router.history.current.path;
        },
        methods: {
            handleTabChange(val) {
                this.activeTab = val;
                this.$router.push(val);
            }
        }
    };
</script>
<style type="text/css" scoped>
    .appHeader{
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 20;
        width: 100%;
    }
</style>