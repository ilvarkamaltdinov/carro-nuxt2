import usedOffers from '~/apollo/queries/usedOffers'

export const state = () => ({
    catalogCars: null,
    car: {}
})
export const getters = {
    catalogCars: (state) => {
        return state.catalogCars
    },
    car: (state) => {
        return state.car
    },
}
export const actions = {
    async getCatalogCars({commit}, payload) {
        let variables = {site_id: 21}
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
    SET_CAR(state, data){
        state.car = data
    }
}
