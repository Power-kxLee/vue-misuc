import Vue from 'vue';
import App from './App';
import router from './router';
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});