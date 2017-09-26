import Vue from 'vue';
import Router from 'vue-router';
import layout from '@/components/layout';
import index from '@/components/index';
import hot from '@/components/hot';
import query from '@/components/query';
import music from '@/components/music';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'layout',
            component: layout,
            redirect: '/index',
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: index
                },
                {
                    path: '/hot',
                    name: 'hotMusic',
                    component: hot
                },
                {
                    path: '/query',
                    name: 'queryMusic',
                    component: query
                }
            ]
        },
        {
            path: '/music',
            name: 'openMusic',
            component: music
        }
    ]
});