import usedOffers from '~/apollo/queries/usedOffers'
import usedOffer from '~/apollo/queries/usedOffer'

export const state = () => ({
    catalogCars: null,
    offer: null,
    view: 's',
    isOfferClick: false
})
export const getters = {
    catalogCars: (state) => {
        return state.catalogCars
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
}
export const actions = {

  async defineOfferUrl(context, payload){
    console.log(context)
  },


    async getOffer({commit}, payload) {
        let variables = {
            site_id: $nuxt.context.$config.site_id,
            mark_slug: payload.mark.slug,
            folder_slug: payload.folder.slug,
            external_id: payload.external_id
        }
        let client = this.app.apolloProvider.defaultClient
        let response = await client.query(
            {
                query: usedOffer,
                variables: variables
            })
        commit('SET_OFFER', response.data.offer)
    },
    async getCatalogCars({commit}, payload) {
        let variables = {site_id: $nuxt.context.$config.site_id}
        let client = this.app.apolloProvider.defaultClient
        let offers = await client.query(
            {
                query: usedOffers,
                variables: Object.assign(variables, payload)
            })
        commit('SET_CATALOG_CARS', offers.data.offers.data)
    },
}
export const mutations = {
    SET_CATALOG_CARS(state, data) {
        state.catalogCars = data
    },
    SET_OFFER(state, data) {
        state.offer = data
        state.isOfferClick = false
    },
    SET_VIEW(state, data) {
        state.view = data
    },
    SET_OFFER_CLICK(state, data) {
        console.log('offerClickChanged')
        state.isOfferClick = data
    }
}
