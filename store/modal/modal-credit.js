export const state = () => ({
    creditCar: null
})
export const getters = {
    creditCar: (state) => {
        return state.creditCar
    },
}
export const mutations = {
    SET_CREDIT_CAR(state, data) {
        state.creditCar = data
    },
}
