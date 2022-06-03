import usedOffers from '~/apollo/queries/filtersCount'

export const state = () => ({
    total: null,
})
export const getters = {
    total: (state) => {
        return state.total
    },
}
export const actions = {
    async getTotal({commit}, payload) {
        let variables = {
            site_id: 7,
            page: 1,
            limit: 0,
            mark_slug_array: payload.mark_slug_array
        }
        let client = this.app.apolloProvider.defaultClient
        let response = await client.query(
            {
                query: usedOffers,
                variables: Object.assign(variables)
            })
        commit('SET_TOTAL', response.data.offers.total);
    },
}
export const mutations = {
    SET_TOTAL(state, data) {
        state.total = data
    }
}
