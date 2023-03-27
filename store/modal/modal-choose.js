import folders from '~/apollo/queries/folder/folders.gql'
import generations from '~/apollo/queries/generations'
import offers from '@/apollo/queries/offer/offers'

export const state = () => ({
    tabComponent: 'mark',
    models: [],
    generations: [],
    offers: [],
    currentMark: null,
    currentModel: null,
    currentGeneration: null,
    currentCar: null,
    loading: true,
    view: 's',
    sort: 'price|asc'
})
export const getters = {
    tabComponent: (state) => {
        return state.tabComponent
    },
    // --------- Выбранная марка, модель, поколение, автомобиль
    currentMark: (state) => {
        return state.currentMark
    },
    sort: (state) => {
        return state.sort
    },
    view: (state) => {
        return state.view
    },
    currentModel: (state) => {
        return state.currentModel
    },
    currentGeneration: (state) => {
        return state.currentGeneration
    },
    currentCar: (state) => {
        return state.currentCar
    },
    // --------- Списки моделей, поколений, автомобилей
    models: (state) => {
        return state.models
    },
    generations: (state) => {
        return state.generations
    },
    offers: (state) => {
        return state.offers
    },
    loading: (state) => {
        return state.loading
    }
}
export const actions = {
    async getModels({commit, state}) {
        commit('SET_MODELS', state.currentMark.folders)
    },
    async getGenerations({commit, dispatch, state}) {

        if (state.currentModel.generations.length === 1) {
            dispatch('chooseGeneration', state.currentModel.generations[0])
        } else {
            await commit('SET_TAB_COMPONENT', 'generation');
        }
        commit('SET_GENERATIONS', state.currentModel.generations)
    },
    async getOffers({commit, state, rootState}) {
        commit('SET_LOADING', true)
        let variables = {
            site_id: rootState.site_id,
            page: 1,
            limit: 10,
            category: 'used',
            dateFormat: 'j F Y года.',
            sort: state.sort,
            mark_slug_array: [state.currentMark.slug],
            folder_slug_array: [state.currentModel.slug],
            generation_slug_array: [state.currentGeneration.slug]
        }
        let client = this.app.apolloProvider.defaultClient
        let cars = await client.query(
            {
                query: offers,
                variables: Object.assign(variables)
            })
        commit('SET_OFFERS', cars.data.offers.data)
        commit('SET_LOADING', false)
    },
    async clearData({commit}) {
        await commit('SET_CURRENT_MARK', null)
        await commit('SET_CURRENT_MODEL', null)
        await commit('SET_CURRENT_GENERATION', null)
        await commit('SET_CURRENT_CAR', null)
        await commit('SET_TAB_COMPONENT', 'mark')
    },

    async chooseMark({commit, dispatch}, payload) {
        await commit('SET_CURRENT_MODEL', null);
        await commit('SET_CURRENT_GENERATION', null);
        await commit('SET_MODELS', null);

        await commit('SET_CURRENT_MARK', payload);
        await dispatch('getModels', payload);
        await commit('SET_TAB_COMPONENT', 'model');

    },
    async chooseModel({commit, dispatch}, payload) {
        await commit('SET_GENERATIONS', null)
        await commit('SET_CURRENT_GENERATION', null);

        await commit('SET_CURRENT_MODEL', payload);
        await dispatch('getGenerations', payload);
    },
    chooseGeneration({commit, dispatch}, payload) {
        commit('SET_CURRENT_GENERATION', payload);
        dispatch('getOffers', payload);
        commit('SET_TAB_COMPONENT', 'car');
    },

}
export const mutations = {
    SET_TAB_COMPONENT(state, data) {
        state.tabComponent = data
    },
    SET_CURRENT_MARK(state, data) {
        state.currentMark = data
    },
    SET_MODELS(state, data) {
        state.models = data
    },
    SET_GENERATIONS(state, data) {
        state.generations = data
    },
    SET_OFFERS(state, data) {
        state.offers = data
    },
    SET_CURRENT_MODEL(state, data) {
        state.currentModel = data
    },
    SET_CURRENT_GENERATION(state, data) {
        state.currentGeneration = data
    },
    SET_CURRENT_CAR(state, data) {
        state.currentCar = data
    },
    SET_LOADING(state, data) {
        state.loading = data
    },
    SET_SORT(state, data) {
        state.sort = data
    },
    SET_VIEW(state, data) {
        state.view = data
    },
    SET_MODAL_SORT(state, data) {
        state.sort = data
    },
}
