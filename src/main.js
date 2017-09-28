import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import MuseUI from 'muse-ui';
import axios from 'axios';
import App from './App';
import router from './router';
import store from './vuex';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);
Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
sync(store, router);
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
});