const state = {
    user: { "roles": [] }
};

const getters = {
    getUser: state => state.user
}

const mutations = {

    setUser(state, user) {
        state.user = user
    }
}

export default {
    getters,
    state,
    mutations,
};