export const state = () => ({
    allMarks: [],
    commMarks: [],
    europeMarks: [],
    popularMarks: [
        'audi', 'bmw', 'mercedes-benz', 'ford', 'hyundai', 'kia', 'toyota', 'volkswagen', 'nissan', 'skoda'
    ],
    allMarksCount: null,

    alphabetMarks: [],
})
export const getters = {
    allMarks: (state) => {
        return state.allMarks
    },
    commMarks: (state) => {
        return state.commMarks
    },
    europeMarks: (state) => {
        return state.europeMarks
    },
    sortedByAlphabet() {
        return state.allMarksCount
    },
    allMarksCount: (state) => {
        return state.allMarksCount
    },
    alphabetMarks: (state) => {
        return state.alphabetMarks
    },
    popularMarks: (state) => {
        return state.popularMarks
    },

}

export const mutations = {
    SET_ALL_MARKS(state, data) {
        //Подсчет общего кол-ва автомобилей
        state.popularMarks = state.popularMarks.map((name) => data.find((mark) => mark.slug === name))
        data.forEach(val => {
            state.allMarksCount += val.offers_count
            //разбивка по алфавиту
            state.alphabetMarks.push(val.title[0])
            //
        })

        state.alphabetMarks = [...new Set(state.alphabetMarks)].sort()

        state.allMarks = data

    },
    SET_COMM_MARKS(state, data) {
        state.commMarks = data
    },
    SET_EUROPE_MARKS(state, data) {
        state.europeMarks = data
    },
}
