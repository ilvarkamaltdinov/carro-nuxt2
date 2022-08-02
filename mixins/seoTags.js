import seoTags from "@/apollo/queries/seoTags";
import folders from "@/apollo/queries/folder/folders";
import generations from "@/apollo/queries/generations";
import {mapGetters} from "vuex";

export default {
    async asyncData({app, route, store}) {
        let client = app.apolloProvider.defaultClient
        let seo = await client.query({
            query: seoTags,
            variables: {site_id: store.getters.site_id, url: route.path === '/' ? '/home' : route.path}
        })
        if (route.params.mark) {
            let response = await client.query(
                {
                    query: folders,
                    variables: {
                        site_id: store.getters.site_id,
                        mark_slug: route.params.mark,
                        category: route.params.category
                    }
                })
            store.commit('folders/folders/SET_FOLDERS', response.data.folders)
        }
        if (route.params.model) {
            let response = await client.query(
                {
                    query: generations,
                    variables: {
                        site_id: store.getters.site_id,
                        mark_slug: route.params.mark,
                        folder_slug: route.params.model
                    }
                })
            store.commit('generations/generations/SET_GENERATIONS', response.data.generations)
        }

        return {
            description: seo.data.seoTag.description,
            pageTitle: seo.data.seoTag.page_title,
            title: seo.data.seoTag.title,
            crumbs: seo.data.seoTag.crumbs
        }
    },
    computed: {
        ...mapGetters({
            domain: 'domain',
            offer: 'catalog/catalog-cars/offer',
        }),
    },
    head() {
        let currentMeta = [
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
                content: this.domain + this.$route.path,
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

        ]
        let canonicalDomain = 'https://carro.ru'

        if (this.domain !== 'https://carro.ru' &&
            this.domain !== 'https://spb.carro.ru' &&
            this.domain !== 'https://kaluga.carro.ru') {
            currentMeta.push({
                name: 'robots',
                content: 'noindex, nofollow'
            })
        }

        if (this.offer) {
            currentMeta.push({
                hid: 'og:image',
                property: 'og:image',
                content: this.offer.images[0].thumb
            })
        } else {
            currentMeta.push({
                hid: 'og:image',
                property: 'og:image',
                content: this.domain + '/carro.png'
            })
        }

        if (this.domain === 'https://carro.ru'
            || this.domain === 'https://spb.carro.ru'
            || this.domain === 'https://kaluga.carro.ru') {
            canonicalDomain = this.domain
        }

        const canonical = `${canonicalDomain}${this.$route.path
            .toLowerCase()
            .replace(/\/$/, '')}`
        return {
            title: `${this.title}`,
            link: [
                {
                    rel: 'canonical',
                    href: canonical
                }
            ],
            meta: currentMeta
        }
    }
}