import {mapGetters} from "vuex";

export default {
    data() {
        return {
            form: {
                paymentValue: null,
                periodValue: null,
                mark: {
                    valid: null,
                    value: '',
                },
                model: {
                    valid: null,
                    value: '',
                },
                year: {
                    valid: null,
                    value: 'Год от',
                },
                gearbox: {
                    valid: null,
                    value: 'КПП',
                },
                engineType: {
                    valid: null,
                    value: 'Двигатель',
                },
                run: {
                    valid: null,
                    value: '',
                },
                price: {
                    valid: null,
                    value: '',
                },
                car: {
                    valid: null,
                    value: '',
                },
                name: {
                    valid: null,
                    value: 'test',
                },
                date: {
                    valid: null,
                    value: '03/05/199'
                },
                phone: {
                    valid: null,
                    value: '+7 (999) 999-99-9'
                },
                agree: false,
            },
        }
    },
    computed: {
        ...mapGetters({
            buttonDisabled: 'form/form/buttonDisabled'
        }),
        years_range() {
            return this._.range(2003, new Date().getFullYear() + 1)
        },
        gearboxes() {
            return [
                'Автомат',
                'механическая',
                'Автомат вариатор',
            ]
        },
        engineTypes() {
            return [
                'Дизельный',
                'Бензиновый',
                'Гибридный',
            ]
        },
        //ВАШ АВТОМОБИЛЬ
        car_valid() {
            return this.form.car.value.length >= 2
        },
        car_invalid() {
            return this.form.car.valid === false
        },
        carClass() {
            if (this.car_valid) {
                return 'form__field-wrap--success'
            } else if (this.car_invalid) {
                return 'form__field-wrap--error'
            }
        },
        //МАРКА
        mark_valid() {
            return this.form.mark.value.length >= 2
        },
        mark_invalid() {
            return this.form.mark.valid === false
        },
        markClass() {
            if (this.mark_valid) {
                return 'form__field-wrap--success'
            } else if (this.mark_invalid) {
                return 'form__field-wrap--error'
            }
        },
        //ЦЕНА
        price_valid() {
            return this.form.price.value.length >= 2
        },
        price_invalid() {
            return this.form.price.valid === false
        },
        priceClass() {
            if (this.price_valid) {
                return 'form__field-wrap--success'
            } else if (this.price_invalid) {
                return 'form__field-wrap--error'
            }
        },
        //МОДЕЛЬ
        model_valid() {
            return this.form.model.value.length >= 1
        },
        model_invalid() {
            return this.form.model.valid === false
        },
        modelClass() {
            if (this.model_valid) {
                return 'form__field-wrap--success'
            } else if (this.model_invalid) {
                return 'form__field-wrap--error'
            }
        },
        //ГОД
        year_valid() {
            return this.form.year.value !== 'Год от'
        },
        year_invalid() {
            return this.form.year.valid === false
        },
        yearClass() {
            if (this.year_valid) {
                return 'form__field-wrap--success'
            } else if (this.year_invalid) {
                return 'form__field-wrap--error'
            }
        },
        //КОРОБКА
        gearbox_valid() {
            return this.form.gearbox.value !== 'КПП'
        },
        gearbox_invalid() {
            return this.form.gearbox.valid === false
        },
        gearboxClass() {
            if (this.gearbox_valid) {
                return 'form__field-wrap--success'
            } else if (this.gearbox_invalid) {
                return 'form__field-wrap--error'
            }
        },
        //ДВИГАТЕЛЬ
        engine_type_valid() {
            return this.form.engineType.value !== 'Двигатель'
        },
        engine_type_invalid() {
            return this.form.engineType.valid === false
        },
        engineTypeClass() {
            if (this.engine_type_valid) {
                return 'form__field-wrap--success'
            } else if (this.engine_type_invalid) {
                return 'form__field-wrap--error'
            }
        },
        //ПРОБЕГ
        run_valid() {
            return this.form.run.value.length >= 1
        },
        run_invalid() {
            return this.form.run.valid === false
        },
        runClass() {
            if (this.run_valid) {
                return 'form__field-wrap--success'
            } else if (this.run_invalid) {
                return 'form__field-wrap--error'
            }
        },
        //ФИО
        name_valid() {
            return this.form.name.value.length >= 2
        },
        name_invalid() {
            return this.form.name.valid === false
        },
        nameClass() {
            if (this.name_valid) {
                return 'form__field-wrap--success'
            } else if (this.name_invalid) {
                return 'form__field-wrap--error'
            }
        },
        //Дата рождения
        date_valid() {
            return this.form.date.valid
        },
        date_invalid() {
            return this.form.date.valid === false
        },
        dateClass() {
            if (this.date_valid) {
                return 'form__field-wrap--success'
            } else if (this.date_invalid) {
                return 'form__field-wrap--error'
            }
        },
        //Телефон
        phone_valid() {
            return this.form.phone.valid
        },
        phone_invalid() {
            return this.form.phone.valid === false
        },
        phoneClass() {
            if (this.phone_valid) {
                return 'form__field-wrap--success'
            } else if (this.phone_invalid) {
                return 'form__field-wrap--error'
            }
        },
    },
    methods: {
        agree(checkboxData) {
            this.agree = checkboxData
        },
        changePeriod(value) {
            this.form.periodValue = value
        },
        changePayment(value) {
            this.form.paymentValue = value
        },
        handlerInput(type) {
            this.form[type].valid = null
        },
        changeSelect($event, type) {
            this.form[type].valid = null
            this.form[type].value = $event
        },
    }
}