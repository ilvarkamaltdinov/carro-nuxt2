import _ from 'lodash'

export const state = () => ({
    loading: true,
    loadingRange: true,
    filters: {},
    sort: 'price|asc',
    view: 's',
    offers: null,
    chosen: {},
    componentCatalog: '',
    isFilterClick: false,
    isOfferClick: false,
    filteredTotal: null,
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
    loadingRange: (state) => {
        return state.loadingRange
    },
    sort: (state) => {
        return state.sort
    },
    view: (state) => {
        return state.view
    },
    offers: (state) => {
        return state.offers
    },
    filteredTotal: (state) => {
        return state.filteredTotal
    },
    isFilterClick: (state) => {
        return state.isFilterClick
    },
    isOfferClick: (state) => {
        return state.isOfferClick
    }
}
export const actions = {
    async setUrl({state}) {
        let mark_slug_array = state.chosen.mark?.map(item => item.slug)
        let folder_slug_array = state.chosen.folder?.map(item => item.slug)
        let generation_slug_array = state.chosen.generation?.map(item => item.slug)


        let engine_type_slug_array = state.chosen.engineType?.map(item => item.slug)
        let engine_type_id_array = state.chosen.engineType?.map(item => item.id)
        let body_type_slug_array = state.chosen.bodyType?.map(item => item.slug)
        let body_type_id_array = state.chosen.bodyType?.map(item => item.id)


        let gearbox_id_array = state.chosen.gearbox?.map(item => item.id)
        let drive_type_id_array = state.chosen.driveType?.map(item => item.id)

        let url = ''
        let query = {}

        //TODO МАРКА
        if (mark_slug_array?.length === 1) {
            url = mark_slug_array[0]
        } else {
            query['mark_slug_array'] = mark_slug_array
        }

        //TODO МОДЕЛЬ
        if (mark_slug_array?.length === 1) {
            if (folder_slug_array?.length === 1) {
                url = mark_slug_array[0] + '/' + folder_slug_array[0]
                if (engine_type_slug_array?.length === 1) {
                    url = mark_slug_array[0] + '/' + folder_slug_array[0] + '/' + engine_type_slug_array[0]
                } else {
                    query['engine_type_id_array'] = engine_type_id_array
                }
                if (body_type_slug_array?.length === 1) {
                    url = mark_slug_array[0] + '/' + folder_slug_array[0] + '/' + body_type_slug_array[0]
                } else {
                    query['body_type_id_array'] = body_type_id_array
                }
            }
            else if (folder_slug_array?.length > 1) {
                query['folder_slug_array'] = folder_slug_array
                if (engine_type_slug_array) {
                    query['engine_type_id_array'] = engine_type_id_array
                }
            }
        } else {
            query['folder_slug_array'] = folder_slug_array
        }

        //TODO ПОКОЛЕНИЕ
        if (mark_slug_array?.length === 1) {
            if (folder_slug_array?.length === 1) {
                if (generation_slug_array?.length === 1) {
                    url = mark_slug_array[0] + '/' + folder_slug_array[0] + '/' + generation_slug_array[0]
                } else if (generation_slug_array?.length > 1) {
                    query['generation_slug_array'] = generation_slug_array
                }
            }
        }
        //TODO ДВИГАТЕЛЬ
        if (mark_slug_array?.length === 1) {
            if (folder_slug_array?.length === 1) {
                if (generation_slug_array?.length === 1) {
                    query['engine_type_id_array'] = engine_type_id_array
                }
            }
            else if (!folder_slug_array && engine_type_slug_array?.length === 1) {
                if (body_type_slug_array?.length === 1) {
                    query['engine_type_id_array'] = engine_type_id_array
                } else {
                    url = mark_slug_array?.[0] + '/' + engine_type_slug_array[0]
                }
            }
            else{
                query['engine_type_id_array'] = engine_type_id_array
            }
        } else {
            query['engine_type_id_array'] = engine_type_id_array
        }

        //TODO КУЗОВ
        if (mark_slug_array?.length === 1) {
            if (folder_slug_array?.length === 1) {
                if (generation_slug_array?.length === 1) {
                    query['body_type_id_array'] = body_type_id_array
                } else if (engine_type_slug_array?.length === 1) {
                    query['body_type_id_array'] = body_type_id_array
                }
            } else if (!folder_slug_array) {
                if (body_type_slug_array?.length === 1) {
                    url = mark_slug_array?.[0] + '/' + body_type_slug_array[0]
                } else {
                    query['body_type_id_array'] = body_type_id_array
                }
            }
        } else {
            query['body_type_id_array'] = body_type_id_array
        }


        //TODO КОРОБКА
        if (gearbox_id_array?.length >= 1) {
            query['gearbox_id_array'] = gearbox_id_array
        }
        //TODO ПРИВОД
        if (drive_type_id_array?.length >= 1) {
            query['drive_type_id_array'] = drive_type_id_array
        }
        if (this.app.context.params.category) {
            this.app.router.push({
                path: '/' + this.app.context.params.category + (url !== '' ? '/' + url : ''),
                query
            })
        } else {
            this.app.router.push({
                path: '/used' + (url !== '' ? '/' + url : ''),
                query
            })
        }

    },
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
    SET_LOADING_RANGE(state, data) {
        state.loadingRange = data
    },
    SET_FILTERED_TOTAL(state, data) {
        state.filteredTotal = data
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
    SET_IS_FILTER_CLICK(state, data) {
        state.isFilterClick = data
    },
    SET_IS_OFFER_CLICK(state, data) {
        state.isOfferClick = data
    },
    SET_VIEW(state, data) {
        state.view = data
    },
}
