import feedback from "@/apollo/mutations/feedback";

export const state = () => ({
    userName: null,
    userCar: null,
    userOrderId: null,
    buttonDisabled: false,
})
export const getters = {
    userName: (state) => {
        return state.userName
    },
    userCar: (state) => {
        return state.userCar
    },
    userOrderId: (state) => {
        return state.userOrderId
    },
    buttonDisabled: (state) => {
        return state.buttonDisabled
    }
}
export const actions = {
    async sendForm({commit}, variables) {
        commit('SET_BUTTON_DISABLED', true)
        commit('SET_USER_CAR', variables.car)
        delete variables.car // Удаляю тачку чтобы не ушла на сервак
        commit('SET_USER_NAME', variables.client_name)
        await this.app.router.push('/thanks');
        let assignVariables = {
            site_id: this.$config.site_id
        }
        let client = this.app.apolloProvider.defaultClient
        let params = {...assignVariables, ...variables}
        await client.mutate({
            mutation: feedback,
            variables: this.$removeEmptyObjects(params)
        }).then(({data}) => {
            commit('SET_BUTTON_DISABLED', false)
            commit('SET_ORDER_ID', data.feedback.id)
        }).catch(error => {
            console.log(error)
        })
    }

}
export const mutations = {
    CLEAR_DATA(state){
        state.userName = null
        state.userCar = null
        state.userOrderId = null
        state.buttonDisabled = false
    },
    SET_USER_NAME(state, data) {
        state.userName = data
    },
    SET_USER_CAR(state, data) {
        state.userCar = data
    },
    SET_ORDER_ID(state, data) {
        state.userOrderId = data
    },
    SET_BUTTON_DISABLED(state, data) {
        state.buttonDisabled = data
    },
}