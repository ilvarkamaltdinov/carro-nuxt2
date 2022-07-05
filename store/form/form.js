import feedback from "@/apollo/mutations/feedback";

export const state = () => ({
    userName: null,
    userCar: null,
})
export const getters = {
    userName: (state) => {
        return state.userName
    },
    userCar: (state) => {
        return state.userCar
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
        commit('SET_USER_CAR', variables.car)
        commit('SET_USER_NAME', variables.formData.client_name)
        this.app.router.push('/thanks');
        // let assignVariables = {
        //     site_id: this.$config.site_id
        // }

        // let client = this.app.apolloProvider.defaultClient
        // let params = {...assignVariables, ...variables}
        // await client.mutate(
        //     {
        //         mutation: feedback,
        //         variables: this.$removeEmptyObjects(params)
        //     }).then(({data}) => {
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
}