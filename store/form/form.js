import FEEDBACK from "@/apollo/queries/feedback";

export const actions = {
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
