export default{
    methods:{
        getUrlParams(){
            if(this.$route.query){
                for (let param in this.$route.query) {
                    if(
                        param === 'utm_source'
                        || param === 'utm_medium'
                        || param === 'utm_term'
                        || param === 'utm_content'
                        || param === 'utm_campaign'){
                        if(this.$route.query[param]){
                            localStorage.setItem(param, this.$route.query[param])
                        }
                    }
                }
            }
        }
    },
   async mounted(){
        await this.getUrlParams()
    }
}