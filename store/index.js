export const strict = false
import usedMarks from '~/apollo/queries/usedMarks'

export const actions = {
    async nuxtServerInit({commit}, {app, $config}) {
        let client = app.apolloProvider.defaultClient
        let marks = await client.query(
            {
                query: usedMarks,
                variables: {site_id: $config.site_id}
            })
        commit('marks/marks/SET_ALL_MARKS', marks.data.marks)
    }
}