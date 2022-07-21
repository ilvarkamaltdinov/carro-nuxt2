export const state = () => ({
    dealers: [],
})
export const getters = {
    dealers: (state) => {
        return state.dealers
    },
}
export const mutations = {
    SET_DEALERS(state, data) {
        state.dealers = data
    }
}
