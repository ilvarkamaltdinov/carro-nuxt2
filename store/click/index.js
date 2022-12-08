export const state = () => ({
    generationClick: false,
    headerFilterClick: false,
    mobileFilterClick: false
})
export const getters = {
    generationClick: (state) => {
        return state.generationClick
    },
    headerFilterClick: (state) => {
        return state.headerFilterClick
    },
    mobileFilterClick: (state) => {
        return state.mobileFilterClick
    }
}
export const mutations = {
    SET_GENERATION_CLICK(state, data) {
        state.generationClick = data
    },
    SET_HEADER_FILTER_CLICK(state, data) {
        state.headerFilterClick = data
    },
    SET_MOBILE_FILTER_CLICK(state, data) {
        state.mobileFilterClick = data
    },
}
