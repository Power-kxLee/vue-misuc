<template>
    <div class="music-main">
        <music-header></music-header>
        <div class="musice-content">
            <div class="gridlist-demo-container">
                <mu-grid-list class="gridlist-demo" :cols="3">
                    <mu-sub-header>推荐歌单</mu-sub-header>
                    <mu-grid-tile v-for="tile, index in list" :key="index">
                        <img src="../assets/images/breakfast.jpg"/>
                        <span slot="title">{{tile.title}}</span>
                        <span slot="subTitle">by <b>{{tile.author}}</b></span>
                        <mu-icon-button icon="star_border" slot="action"/>
                    </mu-grid-tile>
                </mu-grid-list>
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
            <mu-divider inset/>
            <mu-list>
                <mu-sub-header inset>Files</mu-sub-header>
                <mu-list-item title="Vacation itinerary" describeText="Jan 20, 2014">
                    <mu-avatar icon="assignment" backgroundColor="blue" slot="leftAvatar" />
                    <mu-icon value="info" slot="right"/>
                </mu-list-item>
                <mu-list-item title="Kitchen remodel" describeText="Jan 10, 2014">
                    <mu-avatar icon="insert_chart" backgroundColor="yellow600" slot="leftAvatar" />
                    <mu-icon value="info" slot="right"/>
                </mu-list-item>
            </mu-list>
        </div>
    </div>
</template>
<script type="text/javascript">
    import musicHeader from './common/header.vue';
    export default{
        data() {
            return {
                list: [
                    {
                        image: '../assets/images/breakfast.jpg',
                        title: 'Breakfast',
                        author: 'Myron'
                    }, {
                        image: '../assets/images/burger.jpg',
                        title: 'Burger',
                        author: 'Linyu'
                    }, {
                        image: '../assets/images/camera.jpg',
                        title: 'Camera',
                        author: 'ruolin'
                    }, {
                        image: '../assets/images/hats.jpg',
                        title: 'Hats',
                        author: 'kakali'
                    }, {
                        image: '../assets/images/honey.jpg',
                        title: 'Honey',
                        author: 'yuyang'
                    }, {
                        image: '../assets/images/morning.jpg',
                        title: 'Morning',
                        author: 'mokayi'
                    }, {
                        image: '../assets/images/vegetables.jpg',
                        title: 'Vegetables',
                        author: 'NUyyyyyyy'
                    }, {
                        image: '../assets/images/water-plant.jpg',
                        title: 'water',
                        author: 'TDDyyyyyyy'
                    }
                ]
            };
        },
        components: {
            musicHeader
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