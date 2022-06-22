import offerFilters from '~/apollo/queries/offerFilters'
import _ from 'lodash'
import offerUrl from "~/apollo/queries/offerUrl";

export const state = () => ({
    loading: true,
    filters: {},
    sort: 'price|asc',
    offers: null,
    chosen: {},
    lastUsedPage: '',
    isClick: false
})
export const getters = {
    filters: (state) => {
        return state.filters
    },
    lastUsedPage: (state) => {
        return state.lastUsedPage
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
    SET_LAST_USED_PAGE(state, data) {
        state.lastUsedPage = data
    },
    SET_IS_CLICK(state, data) {
        state.isClick = data
    }
}
