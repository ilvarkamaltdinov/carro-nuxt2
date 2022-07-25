export const state = () => ({
    modalSearch: false,
    searchResult: [],
    clearSearchValue: false,
    mobileSearch: false
})
export const getters = {
    modalSearch: (state) => {
        return state.modalSearch
    },
    searchResult: (state) => {
        return state.searchResult
    },
    clearSearchValue: (state) => {
        return state.clearSearchValue
    },
    mobileSearch: (state) => {
        return state.mobileSearch
    },
}
export const mutations = {
    setModalSearch(state, data) {
        if (data === 'clear') {
            state.modalSearch = false
            state.clearSearchValue = true
            setTimeout(() => {
                state.clearSearchValue = false
            }, 50)
        } else {
            state.modalSearch = data
        }
    },
    setSearchResult(state, data) {
        state.searchResult = data
    },
    setMobileSearch(state, data) {
        state.mobileSearch = data
    },
}
