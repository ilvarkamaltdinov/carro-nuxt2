export const state = () => ({
    currentCar: null,
    totalSum: null
})
export const getters = {
    currentCar: (state) => {
        return state.currentCar
    },
    totalSum: (state) => {
        return state.totalSum
    }
}
export const actions = {

}
export const mutations = {
    SET_CURRENT_CAR(state, data) {
        state.currentCar = data
    }
}
