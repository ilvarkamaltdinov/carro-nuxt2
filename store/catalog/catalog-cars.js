import usedOffers from '~/apollo/queries/usedOffers'

export const state = () => ({
    catalogCars: null,
})
export const getters = {
    catalogCars: (state) => {
        return state.catalogCars
    }
}
export const actions = {
    async getCatalogCars ({commit}, payload) {
        let variables = {site_id: 7}
        let client = this.app.apolloProvider.defaultClient
        let offers = await client.query(
            {
                query: usedOffers,
                variables: Object.assign(variables, payload)
            })
        commit('SET_CATALOG_CARS',offers.data.offers.data)
    },

}
export const mutations = {
    SET_CATALOG_CARS(state, data) {
        state.catalogCars = data
    }
}
