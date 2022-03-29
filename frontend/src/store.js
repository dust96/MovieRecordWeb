import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        user:{}
    },
    getters:{
        user:(state)=>{return state.user;}
    },
    mutations:{
        setUser(state, user){state.user = user;}
    },
    actions: {
        setUser(context,data) {
            context.commit('setUser',data)
        }
    }
})


export default store;