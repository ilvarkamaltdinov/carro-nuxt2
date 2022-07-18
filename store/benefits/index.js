export const state = () => ({
    benefitModal: false,
    benefit: {},
    benefitsCredit: [
        {
            text: 'Гарантия',
            text_strong: '1 год',
            icon: 'shield',
            description: 'description'
        },
        {
            text: 'Автокредит',
            text_strong: 'от 4.9%',
            icon: 'bank',
            description: 'description'
        },
        {
            text: 'Trade-In как',
            text_strong: 'первый взнос',
            icon: 'trade-in',
            description: 'description'
        },
        {
            text: 'По паспорту',
            text_strong: 'и правам',
            icon: 'docs',
            description: 'description'
        },
        {
            text: 'Зимняя резина',
            text_strong: 'в подарок',
            icon: 'tires',
            description: 'description'
        },
        {
            text: 'КАСКО',
            text_strong: 'за наш счет',
            icon: 'insurance',
            description: 'description'
        },
    ],
    benefitsTradeIn: [
        {
            text: 'Гарантия',
            text_strong: '1 год',
            icon: 'shield',
            description: 'description'
        },
        {
            text: 'Рыночная',
            text_strong: 'цена',
            icon: 'ruble',
            description: 'description'
        },
        {
            text: 'Автокредит',
            text_strong: 'от 4.9%',
            icon: 'bank',
            description: 'description'
        },
        {
            text: 'Trade-In как',
            text_strong: 'первый взнос',
            icon: 'trade-in',
            description: 'description'
        },
        {
            text: 'По паспорту',
            text_strong: 'и правам',
            icon: 'docs',
            description: 'description'
        },
        {
            text: 'Оформление',
            text_strong: 'за 30 мин.',
            icon: 'time',
            description: 'description'
        },
    ],
    benefitsBuyout: [
        {
            text: 'Мгновенная',
            text_strong: 'выплата',
            icon: 'credit-card',
            description: 'description'
        },
        {
            text: 'Рыночная',
            text_strong: 'цена',
            icon: 'ruble',
            description: 'description'
        },
        {
            text: 'Выезд',
            text_strong: 'оценщика',
            icon: 'form',
            description: 'description'
        },
        {
            text: 'Оценка',
            text_strong: 'бесплатно',
            icon: 'engine',
            description: 'description'
        },
        {
            text: 'По паспорту',
            text_strong: 'и правам',
            icon: 'docs',
            description: 'description'
        },
        {
            text: 'Оформление',
            text_strong: 'за 30 мин.',
            icon: 'time',
            description: 'description'
        },
    ],
    benefitsCar: [
        {
            text: 'Гарантия',
            text_strong: '1 год',
            icon: 'shield',
            description: 'description'
        },
        {
            text: 'Автокредит',
            text_strong: 'от 4.9%',
            icon: 'bank',
            description: 'description'
        },
        {
            text: 'Trade-In как',
            text_strong: 'первый взнос',
            icon: 'trade-in',
            description: 'description'
        },
        {
            text: 'По паспорту',
            text_strong: 'и правам',
            icon: 'docs',
            description: 'description'
        },
        {
            text: 'Зимняя резина',
            text_strong: 'в подарок',
            icon: 'tires',
            description: 'description'
        },
        {
            text: 'КАСКО',
            text_strong: 'за наш счет',
            icon: 'insurance',
            description: 'description'
        },
    ]
})
export const getters = {
    benefitsCredit: (state) => {
        return state.benefitsCredit
    },
    benefitsTradeIn: (state) => {
        return state.benefitsTradeIn
    },
    benefitsBuyout: (state) => {
        return state.benefitsBuyout
    },
    benefitsCar: (state) => {
        return state.benefitsCar
    },
    benefitModal: (state) => {
        return state.benefitModal
    },
    benefit: (state) => {
        return state.benefit
    },
}
export const actions = {
    async openBenefit({commit}, payload) {
        console.log(payload)
        await commit('SET_BENEFIT', payload)
        await commit('SET_BENEFIT_MODAL', true)
    },
    async closeBenefit({commit}) {
        await commit('SET_BENEFIT_MODAL', false)
        await commit('SET_BENEFIT', {})
    }
}
export const mutations = {
    SET_BENEFIT_MODAL(state, data) {
        state.benefitModal = data
    },
    SET_BENEFIT(state, data) {
        state.benefit = data
    },
}