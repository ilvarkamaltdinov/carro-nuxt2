export const state = () => ({
    generationClick: false
})
export const getters = {
    generationClick: (state) => {
        return state.generationClick
    }
}
export const mutations = {
    SET_GENERATION_CLICK(state, data) {
        state.generationClick = data
    },
}
