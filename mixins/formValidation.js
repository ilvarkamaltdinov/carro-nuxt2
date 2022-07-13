export default {
    data() {
        return {
            form: {
                car: {
                    valid: null,
                    value: '',
                },
                name: {
                    valid: null,
                    value: '',
                },
                date: {
                    valid: null,
                    value: ''
                },
                phone: {
                    valid: null,
                    value: ''
                },
                agree: false,
            }
        }
    },
    computed: {
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
        handlerInput(type) {
            this.form[type].valid = null
        }
    }
}