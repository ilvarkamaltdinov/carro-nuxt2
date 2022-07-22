import seoTags from "@/apollo/queries/seoTags";
import folders from "@/apollo/queries/folder/folders";

export default {
    async asyncData({app, $config, route, store}) {
        let client = app.apolloProvider.defaultClient
        let seo = await client.query({
            query: seoTags,
            variables: {site_id: $config.site_id, url: route.path === '/' ? '/home' : route.path}
        })
        if (route.params.mark) {
            let response = await client.query(
                {
                    query: folders,
                    variables: {site_id: $config.site_id, mark_slug: route.params.mark, category: route.params.category}
                })
            store.commit('folders/folders/SET_FOLDERS', response.data.folders)
        }
        return {
            description: seo.data.seoTag.description,
            pageTitle: seo.data.seoTag.page_title,
            title: seo.data.seoTag.title,
            crumbs: seo.data.seoTag.crumbs
        }
    },
    head() {
        return {
            title: `${this.title}`,
            link: [
                {
                    rel: 'canonical',
                    href: this.$config.domain + this.$route.path
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
                    content: this.$config.domain + this.$route.path,
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
                    content: this.$config.domain + '/carro.png'
                },
            ]
        }
    }
}