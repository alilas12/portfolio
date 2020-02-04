export const state = () => ({
    authenticated: false
});

export const mutations = {
    defineUser (state) {
        state.authenticated = true;
    }
}

export const actions = {
    async login({commit}, user) {
        if(user.username === "admin" && user.password === "admin") {
            commit("defineUser");
            this.$router.push('/admin');
        }else {
            throw error
        }
    }
}