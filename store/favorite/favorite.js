export const state = () => ({
    likesArray: ['2057225', '2057278'],
    likes: 0,
})
export const getters = {
    likes: (state) => {
        return state.likes
    },
    likesArray: (state) => {
        return state.likesArray
    },

}
export const actions = {
    getLikes() {
        console.log(111111, localStorage.getItem('likes'))
    },
    liked({commit, dispatch, state}, payload) {

        console.log(payload.id)

        let result = state.likesArray
        let carId = String(payload.id)

        if (result.some(item => item === carId)) {
            commit('SET_LIKES_ARRAY', result.filter(item => item !== carId))
        } else {
            result.push(carId)
            commit('SET_LIKES_ARRAY', result)
        }
        console.log(result)


        // let likedCarId = payload.id
        // let likes_array = []
        // likes_array =
        // console.log(likes_array)
    },

}
export const mutations = {
    SET_LIKES(state, data) {
        state.likes = data
    },
    SET_LIKES_ARRAY(state, data) {
        state.likesArray = data
    }
}
