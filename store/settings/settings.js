export const state = () => ({
    settings: {}
})
export const getters = {
    settings: (state) => {
        return state.settings
    },
}
export const mutations = {
    SET_STINGS(state, data) {
        state.settings = data
    }
}
