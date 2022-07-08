export default {
    head: {
        title: 'carro',
        htmlAttrs: {
            lang: 'ru'
        },
        meta: [
            {charset: 'UTF-8'},

            {name: 'robots', content: 'noindex, nofollow'},
            {name: 'theme-color', content: 'ED2939'},
            {name: 'http-equiv="X-UA-Compatible', content: 'ie=edge'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'mask-icon', type: 'image/x-icon', href: '/favicon.svg', sizes: 'any'},
            {rel: 'apple-touch-icon', href: '/apple-touch-icon.png'},
            // {rel: 'icon', type: 'image/x-icon', href: '/mask-icon.svg', color: '#ED2939'},
            {rel: 'manifest', href: '/manifest.json'}
        ]
    },
    render: {
        bundleRenderer: {
            shouldPreload: (file, type) => {
                return ['script', 'style', 'font'].includes(type)
            }
        }
    },
    loading: {
        color: '#ED2939',
        height: '2px',
        duration: 3000,
        continuous: true,
        throttle: 0
    },
    css: [
        '~/assets/styles/index.scss'
        // {src: '@fancyapps/ui/dist/fancybox.css', lang: 'css'}
    ],
    plugins: [
        {src: '~/plugins/swiper.js'},
        {src: '~/plugins/rangeSlider.js', mode: 'client'},
        {src: "~/plugins/pagination.js", mode: 'client'},
        {src: '~/plugins/inputmask.js'},
        {src: '~/plugins/slideToggle.js'},
        {src: '~/plugins/lodash.js'},
        {src: '~/plugins/tippy.js'},
        {src: '~/plugins/helpers.js'}
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
        prefetchLinks: false,
        linkActiveClass: 'active',
        linkExactActiveClass: 'active'
    },
    modules: [
        ['vue-scrollto/nuxt', {duration: 300}],
        '@nuxtjs/style-resources',
        '@nuxtjs/apollo',
        '@nuxtjs/device',
        '@nuxtjs/axios',
        '@nuxtjs/sitemap',
        '@nuxt/image',
        '@nuxtjs/svg-sprite'
    ],
    serverMiddleware: {
        '/_ipx': '~/server/middleware/ipx.js'
    },
    image: {
        dir: 'assets/img'
    },
    svgSprite: {
        input: '~/assets/icons/',
        svgoConfig: {
            plugins: [
                {removeViewBox: false},
                {removeDimensions: true},
                {removeAttrs: {attrs: 'fill'}}
            ]
        }
    },
    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: 'https://devapi.carro.ru/graphql'
            }
        }
    },
    buildModules: ['nuxt-lazysizes'],
    lazySizes: {
        extendAssetUrls: {
            img: ['src', 'srcset', 'data-src', 'data-srcset'],
            source: ['src', 'srcset', 'data-src', 'data-srcset']
        }
    },
    build: {
        extractCSS: true,
        loaders: {
            scss: {
                implementation: require('sass')
            }
        }
    },
    server: {
        host: "0.0.0.0"
    },
    publicRuntimeConfig: {
        api_domain: process.env.API_DOMAIN,
        api_endpoint: process.env.API_ENDPOINT,
        domain: process.env.DOMAIN,
        site_id: process.env.SITE_ID,
        default_percent: process.env.DEFAULT_PERCENT
    }
}
