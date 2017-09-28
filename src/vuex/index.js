import Vue from 'vue';
import Vuex from 'vuex';
import path from '../path.js';
Vue.use(Vuex);

// 使用 vuex.commit("fn") 触发函数更改状态
const state = {
    misucUrl: path.misucUrl
};
const getters = {

};
const mutations = {
};
export default new Vuex.Store({
    state,
    getters,
    mutations
});