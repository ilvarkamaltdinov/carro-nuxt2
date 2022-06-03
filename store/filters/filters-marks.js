export const state = () => ({
    chosenMarks: []
})
export const getters = {
    chosenMarks: (state) => {
        return state.chosenMarks
    }
}
export const actions = {
    //получаю список марок по слагам из урла
    async getChosenMarks({commit, state}, payload) {
        let marks = payload.all_marks // все марки
        let slugs = payload.chosen_slugs // слаги в урле
        let result = marks.filter(mark => slugs.includes(mark.slug))

        commit('SET_CHOSEN_MARKS', result)
    },
}
export const mutations = {
    SET_CHOSEN_MARKS(state, data) {
        state.chosenMarks = data
    }
}
