<template>
    <div>
        <music-header></music-header>
        <router-view></router-view>
    </div>
</template>
<script>
    import musicHeader from '../components/common/header.vue';
    export default {
        name: 'app',
        components: {
            musicHeader
        }
    };
</script>