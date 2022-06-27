export const state = () => ({
    banks: [],
    bank: {}

})
export const getters = {
    banks: (state) => {
        return state.banks
    },
    bank: (state) => {
        return state.bank
    },
    tinkoff: (state) => {
        return state.banks.filter(bank => bank.slug === 'tinkoff-bank')[0]
    },
    alfa: (state) => {
        return state.banks.filter(bank => bank.slug === 'alfa-bank')[0]
    },
    sberbank: (state) => {
        return state.banks.filter(bank => bank.slug === 'sberbank')[0]
    },
    sovkombank: (state) => {
        return state.banks.filter(bank => bank.slug === 'sovkombank')[0]
    },
    raiffeisen: (state) => {
        return state.banks.filter(bank => bank.slug === 'raiffeisen-bank')[0]
    },
    vtb: (state) => {
        return state.banks.filter(bank => bank.slug === 'vtb')[0]
    },
}

export const mutations = {
    SET_BANKS(state, data) {
        state.banks = data
    },
    SET_BANK(state, data) {
        state.bank = data
    },
}
