<template>
    <div class="app-layout">
        <music-header></music-header>
        <router-view></router-view>
    </div>
</template>
<style>
    .app-layout{
        padding-top: 104px;
    }
</style>
<script>
    import musicHeader from '../components/common/header.vue';
    export default {
        name: 'app',
        components: {
            musicHeader
        }
    };
</script>