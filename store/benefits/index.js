export const state = () => ({
    benefitModal: false,
    benefit: {},
    benefitsCredit: ['sale', 'guaranty', 'first-pay', 'first-pay-trade', 'docs', 'insurance'],
    benefitsTradeIn: ['sale-trade', 'guaranty', 'value-market', 'first-pay-trade', 'docs', 'fast-time'],
    benefitsBuyout: ['fast-pay', 'value-market', 'value-man', 'value-free', 'docs', 'fast-time'],
    benefitsCar: ['guaranty', 'credit', 'first-pay-trade', 'docs', 'tires', 'insurance'],
    benefits: [
        {
            text: 'Гарантия',
            text_strong: '1 год',
            icon: 'shield',
            description: 'Автосалоны-партнеры CARRO предоставляют гарантию на техническое состояние автомобиля в течение одного года с момента покупки.',
            slug: 'guaranty',
        },
        {
            text: 'Скидка',
            text_strong: 'до 150 000 ₽',
            icon: 'bank',
            description: 'При оформлении автомобиля в кредит через CARRO Вам предоставляется дополнительная скидка в размере до 150 000 ₽ от изначальной стоимости автомобиля.',
            slug: 'sale',
        },
        {
            text: 'Выгода',
            text_strong: 'до 150 000 ₽',
            icon: 'bank',
            description: 'При обмене автомобиля по по программе Trade-In через CARRO Вам предоставляется скидка до 250 000 ₽ от изначальной стоимости нового автомобиля.',
            slug: 'sale-trade',
        },
        {
            text: 'Автокредит',
            text_strong: 'от 4.9%',
            icon: 'bank',
            description: 'На CARRO представлены только проверенные автоцентры и банки. Ставка ниже 4.9% по автокредиту является неправдивой (ниже ставки рефинансирования ЦБ РФ) и как правило предлагается недобросовестными сайтами и автосалонами.',
            slug: 'credit',
        },
        {
            text: 'Первый взнос',
            text_strong: 'от 0%',
            icon: 'engine',
            description: 'Вы можете приобрести автомобиль в кредит без первоначального взноса, однако, чем больше взнос, тем лучше условия по кредиту.',
            slug: 'first-pay',
        },
        {
            text: 'Trade-In как',
            text_strong: 'первый взнос',
            icon: 'trade-in',
            description: 'В качестве первоначального взноса Вы можете сдать свой автомобиль по системе Trade-In с дополнительной скидкой до 150 000 ₽.',
            slug: 'first-pay-trade',
        },
        {
            text: 'По паспорту',
            text_strong: 'и правам',
            icon: 'docs',
            description: 'Для оформления автомобиля в кредит через CARRO Вам потребуются только паспорт и водительское удостоверение.',
            slug: 'docs',
        },
        {
            text: 'Зимняя резина',
            text_strong: 'в подарок',
            icon: 'tires',
            description: 'При покупке автомобиля через CARRO каждый клиент получает комплект второй комплект резины в подарок.',
            slug: 'tires',
        },
        {
            text: 'ОСАГО',
            text_strong: 'за наш счет',
            icon: 'insurance',
            description: 'При покупке автомобиля в кредит через CARRO каждый клиент получает ОСАГО в подарок.',
            slug: 'insurance',
        },
        {
            text: 'Рыночная',
            text_strong: 'цена',
            icon: 'ruble',
            description: 'Будьте уверены, что оценка автомобиля будет максимально лояльной, соответствующей рыночным ценам, и Вы получите всю сумму на руки.',
            slug: 'value-market',
        },
        {
            text: 'Оформление',
            text_strong: 'за 30 мин.',
            icon: 'engine',
            description: 'Благодаря упрощенному процессу получения кредита весь процесс займет не более получаса.',
            slug: 'fast-time',
        },
        {
            text: 'Мгновенная',
            text_strong: 'выплата',
            icon: 'credit-card',
            description: 'После оформления документов Вы получите всю сумму на руки без задержек и проволочек.',
            slug: 'fast-pay',
        },
        {
            text: 'Выезд',
            text_strong: 'оценщика',
            icon: 'form',
            description: 'Мы предлагаем бесплатную оценку с возможностью выезда независимого мастера-оценщика.',
            slug: 'value-man',
        },
        {
            text: 'Оценка',
            text_strong: 'бесплатно',
            icon: 'engine',
            description: 'Все расходы, связанные с диагностикой и оценкой автомобиля, а также его юридической чистотой, мы берем на себя.',
            slug: 'value-free',
        },
    ]
})
export const getters = {
    benefits(state) {
        return state.benefits
    },
    benefit: (state) => {
        return state.benefit
    },
    benefitsCredit: (state) => {
        return state.benefits.filter((item) => {
            return state.benefitsCredit.indexOf(item.slug) !== -1;
        })
    },
    benefitsTradeIn: (state) => {
        return state.benefits.filter((item) => {
            return state.benefitsTradeIn.indexOf(item.slug) !== -1;
        })
    },
    benefitsBuyout: (state) => {
        return state.benefits.filter((item) => {
            return state.benefitsBuyout.indexOf(item.slug) !== -1;
        })
    },
    benefitsCar: (state) => {
        return state.benefits.filter((item) => {
            return state.benefitsCar.indexOf(item.slug) !== -1;
        })
    },
    benefitModal: (state) => {
        return state.benefitModal
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
