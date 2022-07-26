import feedback from "@/apollo/mutations/feedback";

export const state = () => ({
    periodValue: null,
    monthPayment: null,

    userName: null,
    userCar: null,
    userOrderId: null,
    buttonDisabled: false,
    formType: ''
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
    },
    formType: (state) => {
        return state.formType
    },
    periodValue: (state) => {
        return state.periodValue
    },
    monthPayment: (state) => {
        return state.monthPayment
    }
}
export const actions = {
    async sendForm({state, commit, rootState}, variables) {
        await commit('SET_FORM_TYPE', variables.type)
        await commit('SET_BUTTON_DISABLED', true)
        //проверяю тачка ли это так как в колбэке дилера тачки нет
        if (variables.type !== 'buyout' && variables.type !== 'station' && variables.type !== 'paid-selection') {
            if (variables.chosen_car.mark) {
                await commit('SET_USER_CAR', variables.chosen_car)
                delete variables.chosen_car // Удаляю тачку чтобы не ушла на сервак
            }
        }
        //проверяю дилера
        await commit('SET_USER_NAME', variables.client_name)

        //Проверяю type для редиректа на нужную страницу
        if (variables.dealer) {
            if (variables.dealer === 'avtograd') {
                await this.app.router.push('/thanks-avtograd');
            } else if (variables.dealer === 'prime') {
                await this.app.router.push('/thanks-prime');
            } else if (variables.dealer === 'komm-auto') {
                await this.app.router.push('/thanks-comm');
            }
            delete variables.dealer // Удаляю дилера чтобы не ушел на сервак
        }
        if (variables.type === 'trade-in') {
            await this.app.router.push('/tradein-thanks');
        }
        if (variables.type === 'callback') {
            await this.app.router.push('/call-thanks');
        }
        if (variables.type === 'buyout') {
            await this.app.router.push('/buyout-thanks');
        }
        if (variables.type === 'paid-selection') {
            await this.app.router.push('/selection-thanks');
        }
        if (variables.type === 'hire-purchase') {
            await this.app.router.push('/rassrochka-thanks');
        }
        if (variables.type === 'station') {
            await this.app.router.push('/servise-tnx');
        }
        //

        let assignVariables = {
            site_id: rootState.site_id
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
    CLEAR_DATA(state) {
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
    SET_FORM_TYPE(state, data) {
        state.formType = data
    },
    SET_PERIOD_VALUE(state, data) {
        state.periodValue = data
    },
    SET_MONTH_PAYMENT_VALUE(state, data) {
        state.monthPayment = data
    }
}