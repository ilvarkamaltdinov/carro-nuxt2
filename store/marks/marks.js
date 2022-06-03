export const state = () => ({
    allMarks: [],
    allMarksCount: null,
    alphabetMarks: [],
})
export const getters = {
    allMarks: (state) => {
        return state.allMarks
    },
    allMarksCount: (state) => {
        return state.allMarksCount
    },
    alphabetMarks: (state) => {
        return state.alphabetMarks
    },
}

export const mutations = {
    SET_ALL_MARKS(state, data) {
        //Подсчет общего кол-ва автомобилей
        data.forEach(val => {
            state.allMarksCount += val.offers_count

            //разбивка по алфавиту
            state.alphabetMarks.push(val.title[0])
            //

        })

        state.alphabetMarks = [...new Set(state.alphabetMarks)]

        state.allMarks = data

    },
}
