export const strict = false
import usedMarks from '~/apollo/queries/usedMarks'
import usedOffers from '~/apollo/queries/usedOffers'

export const actions = {
    async nuxtServerInit({dispatch, commit}, {app, $config, route, $stringToArray}) {
        let client = app.apolloProvider.defaultClient

        // TODO ПОЛУЧАЮ СПИСОК МАРОК
        let marks = await client.query(
            {
                query: usedMarks,
                variables: {site_id: $config.site_id}
            })
        commit('marks/marks/SET_ALL_MARKS', marks.data.marks)
        // TODO ПОЛУЧАЮ СПИСОК АВТОМОБИЛЕЙ
        let offers = await client.query(
            {
                query: usedOffers,
                variables: {
                    site_id: $config.site_id,
                    page: 0,
                    limit: 10,
                }
            }
        )
        commit('catalog/catalog-cars/SET_OFFERS', offers.data.offers)
    }
}