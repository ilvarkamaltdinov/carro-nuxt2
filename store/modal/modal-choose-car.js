import usedFolders from '~/apollo/queries/usedFolders'
import usedGeneration from '~/apollo/queries/usedGeneration'
import usedOffers from '~/apollo/queries/usedOffers'

export const state = () => ({
    tabComponent: 'marks',
    models: [],
    generations: [],
    cars: [],
    currentMark: null,
    currentModel: null,
    currentGeneration: null,
    currentCar: null,
})
export const getters = {
    tabComponent: (state) => {
        return state.tabComponent
    },
    // --------- Выбранная марка, модель, поколение, автомобиль
    currentMark: (state) => {
        return state.currentMark
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
    cars: (state) => {
        return state.cars
    }
}
export const actions = {
    async getModels({commit, state}, payload) {
        let variables = {
            site_id: 7,
            mark_slug: state.currentMark.slug
        }
        let client = this.app.apolloProvider.defaultClient
        let folders = await client.query(
            {
                query: usedFolders,
                variables: Object.assign(variables)
            })
        commit('SET_MODELS', folders.data.folders)
    },
    async getGenerations({commit, state}, payload) {
        let variables = {
            site_id: 7,
            mark_slug: state.currentMark.slug,
            folder_slug: payload.slug
        }
        let client = this.app.apolloProvider.defaultClient
        let generations = await client.query(
            {
                query: usedGeneration,
                variables: Object.assign(variables)
            })
        commit('SET_GENERATIONS', generations.data.generations)
    },
    async getCars({commit, state}, payload) {
        let variables = {
            site_id: 7,
            page: 1,
            limit: 10,
            mark_slug: state.currentMark.slug,
            folder_slug: state.currentModel.slug,
            generation_slug: state.currentGeneration.slug
        }
        let client = this.app.apolloProvider.defaultClient
        let cars = await client.query(
            {
                query: usedOffers,
                variables: Object.assign(variables)
            })
        commit('SET_CARS', cars.data.offers.data)
    },

    chooseMark({commit, dispatch}, payload) {
        commit('SET_CURRENT_MARK', payload);
        dispatch('getModels', payload);
        commit('SET_TAB_COMPONENT', 'models');

        commit('SET_CURRENT_MODEL', null);
        commit('SET_CURRENT_GENERATION', null);
    },
    chooseModel({commit, dispatch}, payload) {
        commit('SET_CURRENT_MODEL', payload);
        dispatch('getGenerations', payload);

        commit('SET_CURRENT_GENERATION', null);

    },
    chooseGeneration({commit, dispatch}, payload) {
        commit('SET_CURRENT_GENERATION', payload);
        dispatch('getCars', payload);
        commit('SET_TAB_COMPONENT', 'cars');
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
    SET_CARS(state, data) {
        state.cars = data
    },
    SET_CURRENT_MODEL(state, data) {
        state.currentModel = data
    },
    SET_CURRENT_GENERATION(state, data) {
        state.currentGeneration = data
    },
    SET_CURRENT_CAR(state, data) {
        state.currentCar = data
    }
}
