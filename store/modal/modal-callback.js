export const state = () => ({
    callbackCar: null
})
export const getters = {
    callbackCar: (state) => {
        return state.callbackCar
    },
}
export const mutations = {
    SET_CALLBACK_CAR(state, data) {
        state.callbackCar = data
    },
}
