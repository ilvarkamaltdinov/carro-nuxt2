import {findDomain} from '~/app/variables'

export const strict = false
import marks from '~/apollo/queries/marks'
import settings from '~/apollo/queries/settings'

export const state = () => ({
    site_id: null,
    domain: '',

    showComm: true,
    showEurope: true,
    showReviews: true,
    showBlog: true
})
export const getters = {
    site_id: (state) => {
        return state.site_id
    },
    domain: (state) => {
        return state.domain
    },
    showComm: (state) => {
        return state.showComm
    },
    showEurope: (state) => {
        return state.showEurope
    },
    showReviews: (state) => {
        return state.showReviews
    },
    showBlog: (state) => {
        return state.showBlog
    },





    isMoscow: (state) => {
        return state.site_id === 21 || state.site_id === 28
    },
}
export const actions = {
    async nuxtServerInit({dispatch, commit, state}, {req, app, $config}) {
        let currentDomain = findDomain(req.headers.host)
        await commit('SET_SITE_ID', currentDomain.siteId);
        await commit('SET_DOMAIN', currentDomain.domain);
        await commit('SET_SHOW_COMM', currentDomain.showComm);
        await commit('SET_SHOW_EUROPE', currentDomain.showEurope);
        await commit('SET_SHOW_REVIEWS', currentDomain.showReviews);
        await commit('SET_SHOW_BLOG', currentDomain.showBlog);

        let client = app.apolloProvider.defaultClient
        // TODO получаю дефолтный процент тут так как в state нет экземпляра контекста
        commit('banks/SET_PERCENT', $config.default_percent)
        // // TODO танцы с бубнами
        // commit('filters/filters/SET_LOADING_RANGE', false)

        // TODO ПОЛУЧАЮ СПИСОК МАРОК
        let response = await client.query(
            {
                query: marks,
                variables: {site_id: state.site_id, category: 'used'}
            })
        commit('marks/marks/SET_ALL_MARKS', response.data.marks)

        //TODO НАСТРОЙКИ САЙТА
        let currentSettings = {}
        let settingsResponse = await client.query(
            {
                query: settings,
                variables: {site_id: state.site_id}
            })
        settingsResponse.data.settings.settings.map(value => {
            currentSettings[value.key] = value.value
        })
        commit('settings/settings/SET_SETTINGS', currentSettings)
    },
    async request({state}, {query, variables}) {
        let assignVariables = {
            site_id: state.site_id
        }
        let client = this.app.apolloProvider.defaultClient
        let params = {...assignVariables, ...variables}
        return await client.query(
            {
                query: query,
                variables: params,
                fetchPolicy: 'no-cache'
            })
    }
}
export const mutations = {
    SET_SITE_ID(state, data) {
        state.site_id = data
    },
    SET_DOMAIN(state, data) {
        state.domain = data
    },

    SET_SHOW_COMM(state, data) {
        state.showComm = data
    },
    SET_SHOW_EUROPE(state, data) {
        state.showEurope = data
    },
    SET_SHOW_REVIEWS(state, data) {
        state.showReviews = data
    },
    SET_SHOW_BLOG(state, data) {
        state.showBlog = data
    },
}
