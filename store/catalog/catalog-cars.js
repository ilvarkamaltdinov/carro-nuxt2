import offers from '@/apollo/queries/offer/offers'
import offer from '@/apollo/queries/offer/offer'

export const state = () => ({
    offers: [],
    offer: null,
    loading: true,
    view: 's',
    isOfferClick: false,
    carPageLoaded: false
})
export const getters = {
    offers: (state) => {
        return state.offers
    },
    offer: (state) => {
        return state.offer
    },
    isOfferClick: (state) => {
        return state.isOfferClick
    },
    view: (state) => {
        return state.view
    },
    carPageLoaded: (state) => {
        return state.carPageLoaded
    },
    loading: (state) => {
        return state.loading
    },
}
export const actions = {
    async getOffer({commit}, payload) {
        let variables = {
            site_id: $nuxt.context.$config.site_id,
            mark_slug: payload.mark.slug,
            folder_slug: payload.folder.slug,
            external_id: payload.external_id,
        }
        let client = this.app.apolloProvider.defaultClient
        let response = await client.query(
            {
                query: offer,
                variables: variables
            })
        commit('SET_OFFER', response.data.offer)
    },
    async getOffers({commit}, payload) {
        await commit('SET_LOADING', true)
        let variables = {site_id: $nuxt.context.$config.site_id}
        let client = this.app.apolloProvider.defaultClient
        let response = await client.query(
            {
                query: offers,
                variables: Object.assign(variables, payload)
            })
        await commit('SET_OFFERS', response.data.offers.data)
        await commit('SET_LOADING', false)
    },
}
export const mutations = {
    SET_OFFERS(state, data) {
        state.offers = data
    },
    SET_OFFER(state, data) {
        state.offer = data
        state.isOfferClick = false
    },
    SET_VIEW(state, data) {
        state.view = data
    },
    SET_CAR_PAGE_LOADED(state, data) {
        state.carPageLoaded = data
    },
    SET_LOADING(state, data) {
        state.loading = data
    },
    SET_OFFER_CLICK(state, data) {
        state.isOfferClick = data
    }
}
