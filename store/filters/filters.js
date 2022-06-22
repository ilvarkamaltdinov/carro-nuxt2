import offerFilters from '~/apollo/queries/offerFilters'
import _ from 'lodash'

export const state = () => ({
    loading: true,
    filters: {},
    sort: 'price|asc',
    offers: null,
    chosen: {},
    carPage: false,
    isClick: false
})
export const getters = {
    filters: (state) => {
        return state.filters
    },
    carPage: (state) => {
        return state.carPage
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
    async getFilters({commit}, {$config, route, $stringToArray}) {
        console.log($config, route, $stringToArray)
        // commit('SET_LOADING', true)
        // let variables = {
        //     site_id: this.$config.site_id,
        //     url: $nuxt.$route.path,
        //     mark_slug_array: $nuxt.$stringToArray($nuxt.$route.query.mark_slug_array),
        //     folder_slug_array: $nuxt.$stringToArray($nuxt.$route.query.folder_slug_array),
        //     generation_slug_array: $nuxt.$stringToArray($nuxt.$route.query.generation_slug_array),
        //     engine_type_id_array: $nuxt.$numberToArray($nuxt.$route.query.engine_type_id_array),
        //     gearbox_id_array: $nuxt.$numberToArray($nuxt.$route.query.gearbox_id_array),
        //     drive_type_id_array: $nuxt.$numberToArray($nuxt.$route.query.drive_type_id_array),
        //     body_type_id_array: $nuxt.$numberToArray($nuxt.$route.query.body_type_id_array),
        // }
        // try {
        //     let client = $nuxt.$apolloProvider.defaultClient
        //     let response = await client.query(
        //         {
        //             query: offerFilters,
        //             variables: $nuxt.$removeEmptyObjects(variables),
        //             fetchPolicy: 'network-only'
        //         })
        //     commit('SET_FILTERS', response.data.offerFilters)
        //     commit('SET_ALL_CHOSEN', response.data.offerFilters.chosen)
        //     commit('SET_OFFERS', response.data.offers)
        //     commit('SET_LOADING', false)
        //
        // }
        // catch (error) {
        //     console.log(error)
        //     this.$nuxt.error({statusCode: 404})
        // }
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
    SET_CAR_PAGE(state, data) {
        state.carPage = data
    },
    SET_IS_CLICK(state, data){
      state.isClick = data
    }
}
