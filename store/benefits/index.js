export const state = () => ({
    benefitsCredit: [
        {
            text: 'Гарантия',
            text_strong: '1 год',
            icon: 'shield'
        },
        {
            text: 'Автокредит',
            text_strong: 'от 4.9%',
            icon: 'bank'
        },
        {
            text: 'Trade-In как',
            text_strong: 'первый взнос',
            icon: 'trade-in'
        },
        {
            text: 'По паспорту',
            text_strong: 'и правам',
            icon: 'docs'
        },
        {
            text: 'Зимняя резина',
            text_strong: 'в подарок',
            icon: 'tires'
        },
    ],
    benefitsTradeIn: [
        {
            text: 'Гарантия',
            text_strong: '1 год',
            icon: 'shield'
        },
        {
            text: 'Автокредит',
            text_strong: 'от 4.9%',
            icon: 'bank'
        },
        {
            text: 'Trade-In как',
            text_strong: 'первый взнос',
            icon: 'trade-in'
        },
        {
            text: 'По паспорту',
            text_strong: 'и правам',
            icon: 'docs'
        },
        {
            text: 'Зимняя резина',
            text_strong: 'в подарок',
            icon: 'tires'
        },
    ],
    benefitsBuyout: [
        {
            text: 'Гарантия',
            text_strong: '1 год',
            icon: 'shield'
        },
        {
            text: 'Автокредит',
            text_strong: 'от 4.9%',
            icon: 'bank'
        },
        {
            text: 'Trade-In как',
            text_strong: 'первый взнос',
            icon: 'trade-in'
        },
        {
            text: 'По паспорту',
            text_strong: 'и правам',
            icon: 'docs'
        },
        {
            text: 'Зимняя резина',
            text_strong: 'в подарок',
            icon: 'tires'
        },
    ],
    benefitsCar: [
        {
            text: 'Гарантия',
            text_strong: '1 год',
            icon: 'shield'
        },
        {
            text: 'Автокредит',
            text_strong: 'от 4.9%',
            icon: 'bank'
        },
        {
            text: 'Trade-In как',
            text_strong: 'первый взнос',
            icon: 'trade-in'
        },
        {
            text: 'По паспорту',
            text_strong: 'и правам',
            icon: 'docs'
        },
        {
            text: 'Зимняя резина',
            text_strong: 'в подарок',
            icon: 'tires'
        },
    ],
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
}