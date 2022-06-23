import _ from 'lodash'

export const state = () => ({
    loading: true,
    filters: {},
    sort: 'price|asc',
    offers: null,
    chosen: {},
    componentCatalog: '',
    isFilterClick: false,
    isOfferClick: false
})
export const getters = {
    filters: (state) => {
        return state.filters
    },
    componentCatalog: (state) => {
        return state.componentCatalog
    },
    chosen: (state) => {
        return state.chosen
    },
    loading: (state) => {
        return state.loading
    },
    sort: (state) => {
        return state.sort
    },
    offers: (state) => {
        return state.offers
    },
    isFilterClick: (state) => {
      return state.isFilterClick
    },
    isOfferClick: (state) => {
      return state.isOfferClick
    }
}
export const actions = {
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
export const mutations = {
    SET_FILTERS(state, data) {
        state.filters = _.cloneDeep(data)
    },
    SET_CHOSEN(state, data) {
        state.chosen[data.key] = data.value ? data.value : null
    },
    UNSET_CHOSEN(state, key) {
        state.chosen[key] = null
    },
    SET_ALL_CHOSEN(state, data) {
        state.chosen = _.cloneDeep(data)
    },
    SET_LOADING(state, data) {
        state.loading = data
    },
    SET_SORT(state, data) {
        state.sort = data
    },
    SET_OFFERS(state, data) {
        state.offers = data
    },
    SET_COMPONENT_CATALOG(state, data) {
        state.componentCatalog = data
    },
    SET_IS_FILTER_CLICK(state, data){
      state.isFilterClick = data
    },
    SET_IS_OFFER_CLICK(state, data){
      state.isOfferClick = data
    }
}
