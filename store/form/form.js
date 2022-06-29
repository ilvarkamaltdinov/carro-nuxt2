import FEEDBACK from "@/apollo/queries/feedback";

export const actions = {
    //TODO как будет время сделать валидацию в сторе

    // async checkForm({}, form) {
    //     let _form = form
    //     if (_form.car) {
    //         if (_form.car.value.length < 2) {
    //             _form.car.valid = false
    //             return {valid: false, checkingForm:_form}
    //         }
    //     }
    //     if (_form.name) {
    //         if (_form.name.value.length < 2) {
    //             _form.name.valid = false
    //             return {valid: false, checkingForm:_form}
    //         }
    //     }
    //     return {valid: true, checkingForm:_form}
    // },

    async sendForm({}, variables) {
        let assignVariables = {
            site_id: this.$config.site_id
        }
        let client = this.app.apolloProvider.defaultClient
        let params = {...assignVariables, ...variables}
        await client.mutate(
            {
                mutation: FEEDBACK,
                variables: this.$removeEmptyObjects(params)
            }).then(({data}) => {
            console.log(data)
        }).catch(error => {
            console.log(error)
        })
    }

}
