export const state = () => ({
    likesArray: [],
})
export const getters = {
    likesArray: (state) => {
        return state.likesArray
    },

}
export const actions = {
    getLikes({commit}) {
        commit('SET_LIKES_ARRAY', localStorage.getItem('likes') ? localStorage.getItem('likes').split(',') : [])
    },
    liked({commit, dispatch, state}, payload) {

        let result = state.likesArray
        let carId = String(payload.id)




        //////////////////////////
        if (result.some(item => item === carId)) {
            commit('SET_LIKES_ARRAY', result.filter(item => item !== carId))
        } else {
            result.push(carId)
            commit('SET_LIKES_ARRAY', result)
        }
        //////////////////////////



        localStorage.setItem('likes', state.likesArray)
    },

}
export const mutations = {
    SET_LIKES_ARRAY(state, data) {
        state.likesArray = data
    }
}
