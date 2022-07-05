import {mapActions} from "vuex";
import seoTags from "@/apollo/queries/seoTags";
import usedMarks from "@/apollo/queries/usedMarks";

export default {
    async asyncData({app, $config, route}) {
        let client = app.apolloProvider.defaultClient
        let seo = await client.query(
            {
                query: seoTags,
                variables: {site_id: $config.site_id, url: route.path}
            })
        return {
            description: seo.data.seoTag.description,
            pageTitle: seo.data.seoTag.page_title,
            title: seo.data.seoTag.title,
        }
    },
    methods: {
        ...mapActions({
            request: 'filters/filters/request'
        })
    },
    async fetch() {
        try {
            let response = await this.request({
                query: seoTags,
                variables: {url: this.$route.path === '/' ? '/home' : this.$route.path}
            })
            this.description = response.data.seoTag.description
            this.pageTitle = response.data.seoTag.page_title
            this.title = response.data.seoTag.title
        } catch (e) {
            console.log(e)
        }
    },
    head() {
        return {
            title: `${this.title}`,
            link: [
                {
                    rel: 'canonical',
                    href: this.$config.domain
                }
            ],
            meta: [
                {
                    hid: 'desctiption',
                    name: 'description',
                    content: `${this.description}`
                },
                {
                    hid: 'og:type',
                    property: 'og:type',
                    content: 'website',
                },
                {
                    hid: 'og:url',
                    property: 'og:url',
                    content: this.$config.domain + this.$route.fullPath,
                },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: `${this.title}`
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: `${this.description}`
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: this.$config.domain + 'image.png'
                },
            ]
        }
    }
}