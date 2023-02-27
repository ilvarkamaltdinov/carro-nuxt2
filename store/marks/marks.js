export const state = () => ({
    allMarks: [],
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
        const popular = state.popularMarks.map((name) => data.find((mark) => mark.slug === name));

        state.popularMarks = popular
        data.forEach(val => {
            state.allMarksCount += val.offers_count
            //разбивка по алфавиту
            state.alphabetMarks.push(val.title[0])
            //
        })

        state.alphabetMarks = [...new Set(state.alphabetMarks)].sort()

        state.allMarks = data

    },
}
