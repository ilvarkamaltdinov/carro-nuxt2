export const strict = false
import usedMarks from '~/apollo/queries/usedMarks'
import usedOffer from '~/apollo/queries/usedOffer'
import offerFilters from '~/apollo/queries/offerFilters'

export const state = () => ({
    isMobile: true
})
export const getters = {
    isMobile: (state) => {
        return state.isMobile
    }
}

export const mutations = {
    SET_IS_MOBILE(state, data) {
        state.isMobile = data
    },
}

export const actions = {
    async nuxtServerInit({commit}, {app, $config, route}) {
        let client = app.apolloProvider.defaultClient
        let marks = await client.query(
            {
                query: usedMarks,
                variables: {site_id: $config.site_id}
            })
        commit('marks/marks/SET_ALL_MARKS', marks.data.marks)

        // TODO зашел по прямой ссылки в карточку авто
        if (route.params.mark && route.params.model && route.params.car) {
            let variables = {
                site_id: $config.site_id,
                mark_slug: String(route.params.mark),
                folder_slug: String(route.params.model),
                external_id: Number(route.params.car)
            }
            let response = await client.query(
                {
                    query: usedOffer,
                    variables: variables
                })
            commit('catalog/catalog-cars/SET_OFFER', response.data.offer)
        }

        let offers = await client.query(
            {
                query: offerFilters,
                variables: {site_id: $config.site_id}
            }
        )
        commit('filters/filters/SET_OFFERS', offers.data.offers)
    }
}