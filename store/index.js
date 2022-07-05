export const strict = false
import marks from '~/apollo/queries/marks'

export const actions = {
    async nuxtServerInit({dispatch, commit}, {app, $config}) {
        let client = app.apolloProvider.defaultClient

        // TODO ПОЛУЧАЮ СПИСОК МАРОК
        let response = await client.query(
            {
                query: marks,
                variables: {site_id: $config.site_id}
            })
        commit('marks/marks/SET_ALL_MARKS', response.data.marks)
    }
}