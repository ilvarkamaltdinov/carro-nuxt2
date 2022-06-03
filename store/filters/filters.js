import offerFilters from '~/apollo/queries/offerFilters'

export const state = () => ({
    filters: null,
    offers: null,
    chosen: {
        mark_array: [],
        model_array: []
    },
    queries: {
        marks_slug: [],
        models_slug: []
    },

})
export const getters = {
    filters: (state) => {
        return state.filters
    },
    offers: (state) => {
        return state.offers
    },
    chosenMarkArray: (state) => {
        return state.chosen.mark_array
    },
    chosenModelArray: (state) => {
        return state.chosen.model_array
    },
    queriesMarksSlug: (state) => {
        return state.queries.marks_slug
    },
    queriesModelsSlug: (state) => {
        return state.queries.models_slug
    },
}
export const actions = {
    getChosen({commit, state}) {
        //если обновил или зашел по прямой ссылке
        if (!state.chosen.mark_array.length) {
            //получаю марки
            let chosenMarks = []
            chosenMarks = state.filters.mark.filter(markObject => state.queries.marks_slug.includes(markObject.slug))
            commit('SET_CHOSEN_MARK_ARRAY', chosenMarks)
            //получаю модели
            let chosenModels = []
            chosenModels = chosenMarks.reduce(
                (result, mark) => result.concat(
                    mark.folders.filter(
                        (folder) => state.queries.models_slug.includes(folder.slug)
                    )
                ),
                []
            )
            commit('SET_CHOSEN_MODEL_ARRAY', chosenModels)
        }


    },
    async getFilters({commit, dispatch, state}) {
        let url = window.$nuxt._route
        //если заходит по промой ссылке или обновляет
        if (!state.chosen.mark_array.length) {
            //если выбрана одна марка
            if (url.params.mark) {
                commit('SET_QUERIES_MARKS_SLUG', [url.params.mark])
            }
            //если выбрано несколько марок
            if (url.query.mark_slug_array) {
                commit('SET_QUERIES_MARKS_SLUG', url.query.mark_slug_array)
            }

            //если выбраны модели
            if (url.query.folder_slug_array) {
                //если выбрана одна модель
                if (typeof url.query.folder_slug_array === 'string') {
                    commit('SET_QUERIES_MODELS_SLUG', [url.query.folder_slug_array])
                }
                //если выбрано несколько моделей
                else {
                    commit('SET_QUERIES_MODELS_SLUG', url.query.folder_slug_array)
                }
            }
        }

        let variables = {
            site_id: 7,
            page: 1,
            limit: 0,
            mark_slug_array: state.queries.marks_slug,
            folder_slug_array: state.queries.models_slug,
        }
        let client = this.app.apolloProvider.defaultClient
        let response = await client.query(
            {
                query: offerFilters,
                variables: Object.assign(variables)
            })
        // console.log(1111, variables)
        // console.log(1111, response.data.offerFilters)
        commit('SET_OFFERS', response.data.offers)
        commit('SET_FILTERS', response.data.offerFilters)

        dispatch('getChosen')

    },
}
export const mutations = {
    SET_FILTERS(state, data) {
        state.filters = data
    },
    SET_OFFERS(state, data) {
        state.offers = data
    },
    SET_CHOSEN_MARK_ARRAY(state, data) {
        state.chosen.mark_array = data
    },
    SET_QUERIES_MARKS_SLUG(state, data) {
        state.queries.marks_slug = data
    },
    SET_QUERIES_MODELS_SLUG(state, data) {
        state.queries.models_slug = data
    },
    SET_CHOSEN_MODEL_ARRAY(state, data) {
        state.chosen.model_array = data
    }
}
