export const state = () => ({
    authenticated: false,
});

export const mutations = {
    Authguard (state) {
        state.authenticated = true;
    },
}

export const actions = {
    async login({commit}, user) {
        if(user.username === "admin" && user.password === "admin") {
            commit("Authguard");
            this.$router.push('/admin');
        }else {
            throw error
        }
    }
}