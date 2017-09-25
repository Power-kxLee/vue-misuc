<template>
    <header>
        <mu-appbar title="网易云音乐">
        </mu-appbar>
        <mu-tabs :value="activeTab">
            <mu-tab value="tab1" title="TAB ONE"/>
            <mu-tab value="tab2" title="TAB TWO"/>
            <mu-tab value="tab3" title="TAB ACTIVE"/>
        </mu-tabs>
    </header>
</template>
<script type="text/javascript">
    export default{
        data() {
            return {
                activeTab: 'tab1'
            };  
        }
    };
</script>