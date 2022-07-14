import feedback from "@/apollo/mutations/feedback";

export const state = () => ({
    userName: null,
    userCar: null,
    buttonDisabled: false,
})
export const getters = {
    userName: (state) => {
        return state.userName
    },
    userCar: (state) => {
        return state.userCar
    },
    buttonDisabled: (state) => {
        return state.buttonDisabled
    }
}
export const actions = {
    //TODO как будет время сделать валидацию в сторе

    // async checkForm({}, form) {
    //     let _form = form
    //     if (_form.car) {
    //         if (_form.car.value.length < 2) {
    //             _form.car.valid = false
    //             return {valid: false, checkingForm:_form}
    //         }
    //     }
    //     if (_form.name) {
    //         if (_form.name.value.length < 2) {
    //             _form.name.valid = false
    //             return {valid: false, checkingForm:_form}
    //         }
    //     }
    //     return {valid: true, checkingForm:_form}
    // },

    async sendForm({commit}, variables) {
        commit('SET_BUTTON_DISABLED', true)
        commit('SET_USER_CAR', variables.car)
        delete variables.car // Удаляю тачку чтобы не ушла на сервак
        commit('SET_USER_NAME', variables.client_name)
        this.app.router.push('/thanks');
        commit('SET_BUTTON_DISABLED', false)
        let assignVariables = {
            site_id: this.$config.site_id
        }
        let client = this.app.apolloProvider.defaultClient
        let params = {...assignVariables, ...variables}

        console.log(params)
        // await client.mutate(
        //     {
        //         mutation: feedback,
        //         variables: this.$removeEmptyObjects(params)
        //     }).then(({data}) => {
        //     commit('SET_BUTTON_DISABLED', false)
        //     console.log(data)
        // }).catch(error => {
        //     console.log(error)
        // })
    }

}
export const mutations = {
    SET_USER_NAME(state, data) {
        state.userName = data
    },
    SET_USER_CAR(state, data) {
        state.userCar = data
    },
    SET_BUTTON_DISABLED(state, data) {
        state.buttonDisabled = data
    },
}