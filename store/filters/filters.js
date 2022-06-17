import offerFilters from '~/apollo/queries/offerFilters'
import _ from 'lodash'

export const state = () => ({
  loading: true,
  filters: {},
  sort: 'price|asc',
  offers: null,
  chosen: {},
  isClick: false
})
export const getters = {
  filters: (state) => {
    return state.filters
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
  isClick: (state) => {
    return state.isClick
  }
}
export const actions = {
  async getFilters({commit, state}, payload) {
    commit('SET_LOADING', true)
    let variables = {}
    variables = {
      site_id: $nuxt.context.$config.site_id,
      page: 1,
      limit: 20,
      mark_slug_array: state.chosen.mark?.map(item => item.slug),
      folder_slug_array: state.chosen.folder?.map(item => item.slug),
      generation_slug_array: state.chosen.generation?.map(item => item.slug),
      body_type_id_array: state.chosen.bodyType?.map(item => item.id),
      engine_type_id_array: state.chosen.engineType?.map(item => item.id),
      drive_type_id_array: state.chosen.driveType?.map(item => item.id),
      gearbox_id_array: state.chosen.gearbox?.map(item => item.id),
      year_from: state.chosen.yearFrom,
      year_to: state.chosen.yearTo,
      sort: state.sort,
      category: 'CARS'
    }
    let client = this.app.apolloProvider.defaultClient
    try {
      let response = await client.query(
        {
          query: offerFilters,
          variables: $nuxt.$removeEmptyObjects(variables),
          fetchPolicy: 'network-only'
        })
      await commit('SET_FILTERS', response.data.offerFilters)

      await commit('SET_ALL_CHOSEN', response.data.offerFilters.chosen)

      await commit('SET_IS_CLICK', false)

      await commit('SET_OFFERS', response.data.offers)

      await commit('SET_LOADING', false)
    } catch (e) {
      return $nuxt.context.error({statusCode: 404})
    }

  },
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
  SET_IS_CLICK(state, data) {
    state.isClick = data
  }
}
