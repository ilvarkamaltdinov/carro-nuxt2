export const state = () => ({
    backButton: {},
    dealerPhone: null
})
export const getters = {
    backButton: (state) => {
        return state.backButton
    },
    dealerPhone: (state) => {
        return state.dealerPhone
    },
}

export const mutations = {
    SET_BACK_BUTTON(state, data) {
        state.backButton = data
    },
    SET_DEALER_PHONE(state, data) {
        state.dealerPhone = data
    },
}
