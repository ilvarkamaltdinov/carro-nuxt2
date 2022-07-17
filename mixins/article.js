import article from "@/apollo/queries/blog/article";
import {mapActions} from "vuex";

export default {
    data(){
        return{
            article: {}
        }
    },
    methods: {
        ...mapActions({
            request: 'request'
        })
    },
    async fetch() {
        let response = await this.request({query: article, variables: {url: this.$route.path}})
        this.article = response.data.article
    },
}