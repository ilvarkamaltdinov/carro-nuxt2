export const state = () => ({
    allMarks: [],
    popularMarks: [
        'audi', 'bmw', 'ford', 'hyundai', 'kia', 'mazda', 'mercedes-benz', 'mitsubishi', 'nissan', 'skoda'
    ],
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
    popularMarks: (state) => {
        return state.popularMarks
    },

}

export const mutations = {
    SET_ALL_MARKS(state, data) {
        //Подсчет общего кол-ва автомобилей
        let popular = data.filter(mark => {
            return state.popularMarks.find((item)=> item === mark.slug)
        })
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
