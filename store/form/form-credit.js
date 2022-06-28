export const state = () => ({
    // rangePeriodValues: [
    //     "2",
    //     "6",
    //     "12",
    //     "24",
    //     "36",
    //     "48",
    //     "60",
    //     "72",
    //     "84"
    // ],
    // rangePaymentValues: [
    //     '0%',
    //     '10%',
    //     '20%',
    //     '30%',
    //     '40%',
    //     '50%',
    //     '60%',
    //     '70%'
    // ],
    percent_credit: '4.9%',
    rangePeriodValue: '48',
    rangePaymentValue: 0,
    currentCar: null,
    totalSum: null
})
export const getters = {
    rangePeriodValues: (state) => {
        return state.rangePeriodValues
    },
    rangePaymentValues: (state) => {
        return state.rangePaymentValues
    },
    rangePeriodValue: (state) => {
        return state.rangePeriodValue
    },
    rangePaymentValue: (state) => {
        return state.rangePaymentValue
    },
    currentCar: (state) => {
        return state.currentCar
    },
    totalSum: (state) => {
        return state.totalSum
    }
}
export const actions = {
    async calculate({commit, dispatch, state, getters}, payload) {
        if (payload) {
            if (payload.period) {
                commit('SET_RANGE_PERIOD_VALUE', payload.period);
            }
            if (payload.payment) {
                commit('SET_RANGE_PAYMENT_VALUE', parseInt(payload.payment))
            }
        }
        if (state.currentCar) {
            let creditProc = 4.9;
            let car_price = state.currentCar.price;
            let creditTime = parseInt(state.rangePeriodValue);
            let firstPay = parseInt(state.rangePaymentValue);
            let A = 0;

            let i = creditProc / 12 / 100;
            let n = creditTime;
            let S
            if (firstPay !== 0) {
                S = car_price - (car_price * firstPay) / 100;
            } else {
                S = car_price;
            }
            let K = 0;
            if (car_price) {
                K = (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
                A = Math.round(K * S);
                commit('SET_TOTAL_SUM',  String(A).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") + " ₽")
            }
        }
    }
}
export const mutations = {
    SET_CURRENT_CAR(state, data) {
        state.currentCar = data
    },
    SET_RANGE_PERIOD_VALUE(state, data) {
        state.rangePeriodValue = data
    },
    SET_RANGE_PAYMENT_VALUE(state, data) {
        state.rangePaymentValue = data
    },
    SET_TOTAL_SUM(state, data) {
        state.totalSum = data
    }
}
