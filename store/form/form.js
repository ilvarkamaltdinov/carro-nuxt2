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
        let thanks_route = '/thanks'
        await commit('SET_FORM_TYPE', variables.type)
        await commit('SET_BUTTON_DISABLED', true)
        //проверяю тачка ли это так как в колбэке дилера тачки нет
        if (variables.type !== 'buyout' && variables.type !== 'station' && variables.type !== 'free-selection') {
            if (variables.chosen_car.mark) {
                await commit('SET_USER_CAR', variables.chosen_car)
                delete variables.chosen_car // Удаляю тачку чтобы не ушла на сервак
            }
        }
        //проверяю дилера
        await commit('SET_USER_NAME', variables.client_name)

        if (variables.dealer) {
            switch (variables.type) {
                case 'credit':
                    thanks_route = '/thanks-'
                    break;
                case 'trade-in':
                    thanks_route = '/tradein-thanks-'
                    break;
                case 'callback':
                    thanks_route = '/call-thanks-'
                    break;
                case 'hire-purchase':
                    thanks_route = '/rassrochka-thanks-'
                    break;
                default:
                    thanks_route = "/thanks-";
            }

            if(variables.dealer === 'komm-auto'){
                thanks_route += 'comm'
            } else{
                thanks_route += variables.dealer
            }

            delete variables.dealer


        }
        else {
            switch (variables.type) {
                case 'buyout':
                    thanks_route = '/buyout-thanks'
                    break;
                case 'free-selection':
                    thanks_route = '/selection-thanks'
                    break;
                case 'station':
                    thanks_route = '/servise-tnx'
                    break;
                case 'callback':
                    thanks_route = '/call-thanks'
                    break;
                default:
                    thanks_route = "/thanks";
            }
        }

        let assignVariables = {
            site_id: rootState.site_id
        }
        let client = this.app.apolloProvider.defaultClient
        let params = {...assignVariables, ...variables}
        try {
            let result = await client.mutate({
                mutation: feedback,
                variables: this.$removeEmptyObjects(params)
            })
            await commit('SET_ORDER_ID', result.data.feedback.id)


            await this.app.router.push(thanks_route);
            await commit('SET_BUTTON_DISABLED', false)
        } catch (error) {
            console.log(error)
        }
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