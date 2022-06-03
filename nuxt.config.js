export default {
    head: {
        title: 'carro',
        htmlAttrs: {
            lang: 'ru'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'robots', content: 'noindex, nofollow'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    loading: {
        color: '#013b70',
        height: '0',
        duration: 3000,
        continuous: true,
        throttle: 0
    },
    css: [
        '~assets/styles/index.scss',
        // {src: '@fancyapps/ui/dist/fancybox.css', lang: 'css'}
    ],
    plugins: [
        {src: '~/plugins/swiper.js'},
        {src: '~/plugins/rangeSlider.js', mode: 'client'},
        {src: '~/plugins/inputmask.js'}
        // { src:'~/plugins/helpers.js' },
        // { src:'~/plugins/slideToggle.js' },
        // { src: "plugins/pagination.js", mode: 'client' },
        // { src: "~/plugins/fancyapps-ui.js", mode: 'client' },
        //
        // { src: '~/plugins/ymapPlugin.js', mode: 'client' },
        // '~/plugins/lodash'
    ],
    //TODO sitemap
    // sitemap: {
    //     defaults: {
    //         changefreq: 'daily',
    //         priority: 1,
    //         lastmod: new Date()
    //     },
    //     exclude: [
    //         '/thanks'
    //     ],
    //     routes: async() => {
    //         const { data } = await axios.get('https://apinew.carro.ru/api/sitemap/volkswagen')
    //         return data.map((item) => `/cars/${item}`)
    //     }
    // },
    components: true,
    router: {
        linkExactActiveClass: 'active'
    },
    modules: [
        ['vue-scrollto/nuxt', {duration: 300}],
        '@nuxtjs/style-resources',
        '@nuxtjs/svg-sprite',
        '@nuxtjs/apollo',
        '@nuxtjs/axios',
        '@nuxtjs/sitemap'
    ],
    svgSprite: {
        input: '~/static/icons/',
        svgoConfig: {
            plugins: [
                {removeViewBox: false},
                {removeDimensions: true},
                {removeAttrs: {attrs: 'fill'}},

            ]
        }
    },
    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: 'https://api.carro.ru/graphql',
            }
        }
    },
    build: {
        loaders: {
            scss: {
                implementation: require('sass'),
            },
        },
    },
    publicRuntimeConfig: {
        api_domain: process.env.API_DOMAIN,
        domain: process.env.DOMAIN,
        site_id: process.env.SITE_ID
    }
}
