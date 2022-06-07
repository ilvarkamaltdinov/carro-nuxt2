import offerFilters from '~/apollo/queries/offerFilters'

export const state = () => ({
    loading: true,
    filters: {},
    sort: '',
    offers: null,
    chosen: {
        mark_array: [],
        model_array: [],
        generation_array: [],
        engine_type_array: [],
        drive_type_array: [],
        gearbox_array: [],

    },
    queries: {
        marks_slug: [],
        models_slug: [],
        generations_slug: [],
        engine_types_id: [],
        drive_types_id: [],
        gearboxes_id: [],
    },
})
export const getters = {
    filters: (state) => {
        return state.filters
    },
    loading: (state) => {
        return state.loading
    },
    sort: (state) => {
        return state.sort
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
    chosenGenerationArray: (state) => {
        return state.chosen.generation_array
    },
    chosenEngineTypeArray: (state) => {
        return state.chosen.engine_type_array
    },
    chosenDriveTypeArray: (state) => {
        return state.chosen.drive_type_array
    },
    chosenGearboxArray: (state) => {
        return state.chosen.gearbox_array
    },


    queriesMarksSlug: (state) => {
        return state.queries.marks_slug
    },
    queriesModelsSlug: (state) => {
        return state.queries.models_slug
    },
    queriesGenerationsSlug: (state) => {
        return state.queries.generations_slug
    },
    queriesEnginTypesId: (state) => {
        return state.queries.engine_types_id
    },
    queriesDriveTypesId: (state) => {
        return state.queries.drive_types_id
    },
    queriesGearboxesId: (state) => {
        return state.queries.gearboxes_id
    },
}
export const actions = {
    async getMarks({commit, state}) {
        let chosen_marks = state.filters.mark.filter(mark => mark.folders.length)
        await commit('SET_CHOSEN_MARK_ARRAY', chosen_marks)
    },
    async getModels({commit, state}) {
        let chosen_models
        chosen_models = state.chosen.mark_array.reduce(
            (result, mark) => result.concat(
                mark.folders.filter((folder) => folder.generations.length)
            ),
            []
        )
        await commit('SET_CHOSEN_MODEL_ARRAY', chosen_models)
    },
    async getGenerations({commit, state}) {
        let chosen_generations
        chosen_generations = state.chosen.model_array.reduce(
            (result, model) => result.concat(
                model.generations.filter(
                    (generation) => state.queries.generations_slug.includes(generation.slug)
                )
            ),
            []
        )
        await commit('SET_CHOSEN_GENERATION_ARRAY', chosen_generations)
    },
    async getEngineTypes({commit, state}) {
        let chosen_engine_types = state.filters.engineType
            .filter(engine => state.queries.engine_types_id.includes(engine.id))
        await commit('SET_CHOSEN_ENGINE_TYPE_ARRAY', chosen_engine_types)
    },
    async getDriveTypes({commit, state}) {
        let chosen_drive_types = state.filters.driveType
            .filter(drive => state.queries.drive_types_id.includes(drive.id))
        await commit('SET_CHOSEN_DRIVE_TYPE_ARRAY', chosen_drive_types)
    },
    async getGearboxes({commit, state}) {
        let chosen_gearboxes = state.filters.gearbox
            .filter(gearbox => state.queries.gearboxes_id.includes(gearbox.id))
        await commit('SET_CHOSEN_GEARBOX_ARRAY', chosen_gearboxes)
    },

    async getChosen({commit, dispatch, state}) {
        //если обновил или зашел по прямой ссылке
        if (!state.chosen.mark_array.length) {
            //получаю марки
            await dispatch('getMarks')
            //получаю модели
            await dispatch('getModels')
            //получаю поколения
            await dispatch('getGenerations')
        }
        if (!state.chosen.engine_type_array.length) {
            await dispatch('getEngineTypes')
        }
        if (!state.chosen.drive_type_array.length) {
            await dispatch('getDriveTypes')
        }
        if (!state.chosen.gearbox_array.length) {
            await dispatch('getGearboxes')
        }
        commit('SET_LOADING', false)
    },

    async clearChosen({commit}) {
        commit('SET_CHOSEN_MARK_ARRAY', [])
        commit('SET_CHOSEN_MODEL_ARRAY', [])
        commit('SET_CHOSEN_GENERATION_ARRAY', [])
        commit('SET_CHOSEN_ENGINE_TYPE_ARRAY', [])
        commit('SET_CHOSEN_DRIVE_TYPE_ARRAY', [])
        commit('SET_CHOSEN_GEARBOX_ARRAY', [])
    },
    async clearQueries({commit}) {
        commit('SET_QUERIES_MARKS_SLUG', [])
        commit('SET_QUERIES_MODELS_SLUG', [])
        commit('SET_QUERIES_GENERATIONS_SLUG', [])
        commit('SET_QUERIES_ENGINE_TYPES_ID', [])
        commit('SET_QUERIES_DRIVE_TYPES_ID', [])
        commit('SET_QUERIES_GEARBOXES_ID', [])
    },

    async clearFilters({dispatch}) {
        // TODO небольшой баг при выборе одной марки
        // выбрать марку
        // затем выбрать еще несколько марок
        // из-за смены урла вызывается этот метод
        dispatch('clearChosen');
        dispatch('clearQueries');

    },
    async getFilters({commit, dispatch, state}) {
        commit('SET_LOADING', true)
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
            //если выбраны поколения
            if (url.query.generation_slug_array) {
                //если выбрано одно поколение
                if (typeof url.query.generation_slug_array === 'string') {
                    commit('SET_QUERIES_GENERATIONS_SLUG', [url.query.generation_slug_array])
                }
                //если выбрано несколько моделей
                else {
                    commit('SET_QUERIES_GENERATIONS_SLUG', url.query.generation_slug_array)
                }
            }
        }

        if (url.query.engine_type_id_array) {
            let engine_type_id_array
            if (typeof url.query.engine_type_id_array === 'string') {
                engine_type_id_array = Array(url.query.engine_type_id_array)
            } else {
                engine_type_id_array = url.query.engine_type_id_array
            }
            commit('SET_QUERIES_ENGINE_TYPES_ID', engine_type_id_array.map(val => Number(val)))
        }
        if (url.query.drive_type_id_array) {
            let drive_type_id_array
            if (typeof url.query.drive_type_id_array === 'string') {
                drive_type_id_array = Array(url.query.drive_type_id_array)
            } else {
                drive_type_id_array = url.query.drive_type_id_array
            }
            commit('SET_QUERIES_DRIVE_TYPES_ID', drive_type_id_array.map(val => Number(val)))
        }
        if (url.query.gearbox_id_array) {
            let gearbox_id_array
            if (typeof url.query.gearbox_id_array === 'string') {
                gearbox_id_array = Array(url.query.gearbox_id_array)
            } else {
                gearbox_id_array = url.query.gearbox_id_array
            }
            commit('SET_QUERIES_GEARBOXES_ID', gearbox_id_array.map(val => Number(val)))
        }

        let variables = {
            site_id: 21,
            page: 1,
            limit: 20,
            mark_slug_array: state.queries.marks_slug,
            folder_slug_array: state.queries.models_slug,
            generation_slug_array: state.queries.generations_slug,
            engine_type_id_array: state.queries.engine_types_id,
            drive_type_id_array: state.queries.drive_types_id,
            gearbox_id_array: state.queries.gearboxes_id,
            sort: state.sort,
            category: 'CARS'
        }
        let client = this.app.apolloProvider.defaultClient
        let response = await client.query(
            {
                query: offerFilters,
                variables: Object.assign(variables)
            })
        commit('SET_OFFERS', response.data.offers)
        commit('SET_FILTERS', response.data.offerFilters)

        dispatch('getChosen')

    },
}
export const mutations = {
    SET_FILTERS(state, data) {
        state.filters = data
    },
    SET_LOADING(state, data) {
        state.loading = data
    },
    SET_SORT(state, data) {
        state.sort = data
    },
    SET_OFFERS(state, data) {
        state.offers = data
    },
    SET_CHOSEN_MARK_ARRAY(state, data) {
        state.chosen.mark_array = data
    },
    SET_CHOSEN_MODEL_ARRAY(state, data) {
        state.chosen.model_array = data
    },
    SET_CHOSEN_GENERATION_ARRAY(state, data) {
        state.chosen.generation_array = data
    },
    SET_CHOSEN_ENGINE_TYPE_ARRAY(state, data) {
        state.chosen.engine_type_array = data
    },
    SET_CHOSEN_DRIVE_TYPE_ARRAY(state, data) {
        state.chosen.drive_type_array = data
    },
    SET_CHOSEN_GEARBOX_ARRAY(state, data) {
        state.chosen.gearbox_array = data
    },


    SET_QUERIES_MARKS_SLUG(state, data) {
        state.queries.marks_slug = data
    },
    SET_QUERIES_MODELS_SLUG(state, data) {
        state.queries.models_slug = data
    },
    SET_QUERIES_GENERATIONS_SLUG(state, data) {
        state.queries.generations_slug = data
    },
    SET_QUERIES_ENGINE_TYPES_ID(state, data) {
        state.queries.engine_types_id = data
    },
    SET_QUERIES_DRIVE_TYPES_ID(state, data) {
        state.queries.drive_types_id = data
    },
    SET_QUERIES_GEARBOXES_ID(state, data) {
        state.queries.gearboxes_id = data
    },

}
