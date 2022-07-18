export const state = () => ({
    benefitModal: false,
    benefit: {},
    benefits: [
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
        }
    ]
})
export const getters = {
    benefits(state){
        return state.benefits
    },
    benefit: (state) => {
        return state.benefit
    },
}
export const actions = {
    async openBenefit({commit}, payload) {
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