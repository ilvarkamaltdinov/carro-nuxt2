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
        {
          text: 'КАСКО',
          text_strong: 'за наш счет',
          icon: 'insurance'
        },
    ],
    benefitsTradeIn: [
        {
          text: 'Гарантия',
          text_strong: '1 год',
          icon: 'shield'
        },
        {
          text: 'Рыночная',
          text_strong: 'цена',
          icon: 'ruble'
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
            text: 'Оформление',
            text_strong: 'за 30 мин.',
            icon: 'time'
        },
    ],
    benefitsBuyout: [
        {
            text: 'Мгновенная',
            text_strong: 'выплата',
            icon: 'credit-card'
        },
        {
          text: 'Рыночная',
          text_strong: 'цена',
          icon: 'ruble'
        },
        {
            text: 'Выезд',
            text_strong: 'оценщика',
            icon: 'form'
        },
        {
            text: 'Оценка',
            text_strong: 'бесплатно',
            icon: 'engine'
        },
        {
            text: 'По паспорту',
            text_strong: 'и правам',
            icon: 'docs'
        },
        {
          text: 'Оформление',
          text_strong: 'за 30 мин.',
          icon: 'time'
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
      {
        text: 'КАСКО',
        text_strong: 'за наш счет',
        icon: 'insurance'
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
