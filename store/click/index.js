export const state = () => ({
    generationClick: false,
    headerFilterClick: false
})
export const getters = {
    generationClick: (state) => {
        return state.generationClick
    },
    headerFilterClick: (state) => {
        return state.headerFilterClick
    }
}
export const mutations = {
    SET_GENERATION_CLICK(state, data) {
        state.generationClick = data
    },
    SET_HEADER_FILTER_CLICK(state, data) {
        state.headerFilterClick = data
    },
}
