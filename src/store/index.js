import Vue from 'vue';
import Vuex from 'vuex';
//import axios from 'axios';
import robotsModule from './modules/robots';
import usersModule from './modules/users';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        foo: 'root-foo',
        foo2: 'root-foo2',
    },
    modules: {
        robots: robotsModule,
        users: usersModule,
    },
    getters:{
        foo(state){
            return `root-getter/${state.foo}`;
        }
    }
});