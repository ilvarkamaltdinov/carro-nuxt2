export const state = () => ({
    modalMain: false,
    modalMainComponent: '',
})
export const getters = {
    modalMain: (state) => {
        return state.modalMain
    },
    modalMainComponent: (state) => {
        return state.modalMainComponent
    },
}
export const mutations = {
    SET_MODAL_MAIN(state, data) {
        state.modalMainComponent = data.component
        state.modalMain = data.visibility
    },
}
