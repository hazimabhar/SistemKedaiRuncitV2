import { createStore } from "vuex";

const store = createStore({
    state: {
        role:'manager',
    },
    mutations:{
        setRole(state, role){
            state.role = role;
        }
    },
    actions:{
        updateRole({commit},role){
            commit('setRole',role)
        }
    },
    getters:{
        getRole:state=>state.role
    }
})

export default store;
