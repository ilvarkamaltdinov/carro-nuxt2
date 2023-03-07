export const strict = false
import marks from '~/apollo/queries/marks'
import settings from '~/apollo/queries/settings'

export const state = () => ({
    site_id: null,
    domain: '',
})
export const getters = {
    site_id: (state) => {
        return state.site_id
    },
    isMoscow:(state) =>{
       return state.site_id === 21 || state.site_id === 28
    },
    showReviews:(state) =>{
        return state.site_id === 21 || state.site_id === 28 || state.site_id === 30
    },
    showBlog:(state) =>{
        return state.site_id === 21
    },
    showComm:(state) =>{
        return state.site_id === 21 || state.site_id === 28
    },
    domain: (state) => {
        return state.domain
    }
}
export const actions = {
    async nuxtServerInit({dispatch, commit, state}, {req, app, $config}) {
        if (req.headers.host === 'xn--80atnha.xn--p1ai') {
            commit('SET_SITE_ID', $config.site_id_carro_rf);
            commit('SET_DOMAIN', $config.domain_carro_rf);
        } else if(req.headers.host === 'carro.ru'){
            commit('SET_SITE_ID', $config.site_id);
            commit('SET_DOMAIN', $config.domain);
        }
        else if(req.headers.host === 'spb.carro.ru'){
            commit('SET_SITE_ID', $config.site_id_spb);
            commit('SET_DOMAIN', $config.domain_spb);
        }
        else if(req.headers.host === 'xn----8sbb1bvblac.xn--p1ai'){
            commit('SET_SITE_ID', $config.site_id_spb_rf);
            commit('SET_DOMAIN', $config.domain_spb_rf);
        }
        else if(req.headers.host === 'kaluga.carro.ru'){
            commit('SET_SITE_ID', $config.site_id_kaluga);
            commit('SET_DOMAIN', $config.domain_kaluga);
        }
        else if(req.headers.host === 'krsk.carro.ru'){
            commit('SET_SITE_ID', $config.site_id_krsk);
            commit('SET_DOMAIN', $config.domain_carro_krsk);
        }
        //TODO если localhost или dev.carro.ru
        else {
            commit('SET_SITE_ID', $config.site_id_dev);
            commit('SET_DOMAIN', $config.domain_dev);
        }

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
}
