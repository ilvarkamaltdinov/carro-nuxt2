export const strict = false
import usedMarks from '~/apollo/queries/usedMarks'
import usedOffer from '~/apollo/queries/usedOffer'
import offerFilters from '~/apollo/queries/offerFilters'
export const state = () => ({
    isMobile: true
})
export const getters = {
    isMobile: (state) => {
        return state.isMobile
    }
}

export const mutations = {
    SET_IS_MOBILE(state, data) {
        state.isMobile = data
    },
}

export const actions = {
    async fetch(){
        console.log(11111, this)
    },
    async nuxtServerInit({dispatch, commit}, {app, $config, route, $stringToArray}) {
        let client = app.apolloProvider.defaultClient
        // TODO ПОЛУЧАЮ СПИСОК МАРОК
        let marks = await client.query(
            {
                query: usedMarks,
                variables: {site_id: $config.site_id}
            })
        commit('marks/marks/SET_ALL_MARKS', marks.data.marks)
        // TODO ПОЛУЧАЮ СПИСОК АВТОМОБИЛЕЙ
        let offers = await client.query(
            {
                query: offerFilters,
                variables: {site_id: $config.site_id}
            }
        )
        commit('filters/filters/SET_OFFERS', offers.data.offers)
        // // TODO ЕСЛИ ЗАШЕЛ ПО ПРЯМОЙ ССЫЛКЕ НА ФИЛЬТРЫ
        //
        // console.log(route)
        // if (route.name === 'used-mark-model-car') {
        //     console.log(1111)
        // }
        // else {
        //     let variables = {
        //         url: route.path,
        //         mark_slug_array: route.query.mark_slug_array || $stringToArray(route.params.mark) ,
        //         folder_slug_array: route.query.folder_slug_array || $stringToArray(route.params.model),
        //         // generation_slug_array: this.stringToArray(this.$route.query.generation_slug_array),
        //         // engine_type_id_array: this.numberToArray(this.$route.query.engine_type_id_array),
        //         // gearbox_id_array: this.numberToArray(this.$route.query.gearbox_id_array),
        //         // drive_type_id_array: this.numberToArray(this.$route.query.drive_type_id_array),
        //         // body_type_id_array: this.numberToArray(this.$route.query.body_type_id_array),
        //     }
        //     console.log(variables)
        // }

    }
}