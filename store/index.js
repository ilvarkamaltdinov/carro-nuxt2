export const strict = false
import marks from '~/apollo/queries/marks'

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
                variables: {site_id: $config.site_id}
            })
        commit('marks/marks/SET_ALL_MARKS', response.data.marks)
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