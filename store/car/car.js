export const state = () => ({
    focusShowFixed: true
})
export const getters = {
    focusShowFixed: (state) => {
        return state.focusShowFixed
    }
}
export const mutations = {
    SET_FOCUS_SHOW_FIXED(state, data) {
        state.focusShowFixed = data
    }
}
