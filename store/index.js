export const strict = false
import marks from '~/apollo/queries/marks'
import settings from '~/apollo/queries/settings'

export const actions = {

    async nuxtServerInit({dispatch, commit}, {app, $config}) {
        let client = app.apolloProvider.defaultClient
        // TODO получаю дефолтный процент тут так как в state нет экземпляра контекста
        commit('banks/SET_PERCENT', $config.default_percent)
        // // TODO танцы с бубнами
        // commit('filters/filters/SET_LOADING_RANGE', false)

        // TODO ПОЛУЧАЮ СПИСОК МАРОК
        let response = await client.query(
            {
                query: marks,
                variables: {site_id: $config.site_id, category: 'used'}
            })
        commit('marks/marks/SET_ALL_MARKS', response.data.marks)

        //TODO НАСТРОЙКИ САЙТА
        let currentSettings = {}
        let settingsResponse = await client.query(
            {
                query: settings,
                variables: {site_id: $config.site_id}
            })
        settingsResponse.data.settings.settings.map(value => {
            currentSettings[value.key] = value.value
        })
        commit('settings/settings/SET_SETTINGS', currentSettings)
    },
    async request({}, {query, variables}) {
        let assignVariables = {
            site_id: this.$config.site_id
        }
        let client = this.app.apolloProvider.defaultClient
        let params = {...assignVariables, ...variables}
        return await client.query(
            {
                query: query,
                variables: this.$removeEmptyObjects(params),
                fetchPolicy: 'no-cache'
            })
    }
}