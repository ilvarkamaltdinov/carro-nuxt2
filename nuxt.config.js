import {redirects} from './configModules'

const isDev = process.env.NODE_ENV !== 'production'

export default {
    // ...(!isDev && {
    //     modern: 'client'
    // }),
    head: {
        title: 'carro',
        htmlAttrs: {
            lang: 'ru'
        },
        meta: [
            {charset: 'UTF-8'},
            {name: 'yandex-verification', content: 'f70bc9bad3cb4352'},
            {name: 'google-site-verification', content: 'bWKRxv7GJwHjT2LiBTxTJHGkT_2MjLWJfRbE4_uJbrU'},
            {name: 'theme-color', content: 'ED2939'},
            {name: 'http-equiv="X-UA-Compatible', content: 'ie=edge'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {name: 'format-detection', content: 'telephone=no'},
            {name: 'apple-mobile-web-app-capable', content: 'yes'},
            {name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'}
        ],
        link: [
            {rel: 'icon', href: '/favicon.ico', sizes: 'any'},
            {rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml'},
            {rel: 'mask-icon', href: '/mask-icon.svg', color: '#ED2939'},
            {rel: 'manifest', href: '/manifest.json'},
            {
                rel: 'apple-touch-icon',
                href: 'https://www.carro.ru/apple-touch-icon.png',
                type: 'image/png',
                sizes: '180x180'
            },
            {rel: 'apple-touch-icon', href: '/apple-touch-icon-512x512.png', type: 'image/png', sizes: '512x512'},
            {
                rel: 'apple-touch-icon',
                href: '/apple-touch-icon-120x120-precomposed.png',
                type: 'image/png',
                sizes: '120x120'
            },
            {
                rel: 'apple-touch-icon', href: '/apple-touch-icon-120x120.png', type: 'image/png',
                sizes: '120x120'
            }
        ]
    },
    resourceHints: false,
    render: {
        bundleRenderer: {
            shouldPreload: (file, type) => {
                return ['style', 'font'].includes(type)
            }
        }
    },
    serverMiddleware: {
        '/feeds': '~/server-middleware/index.js',
        '/api': '~/server-middleware/index.js',
        '/robots.txt': '~/server-middleware/robots.js',
        '/sitemap.xml': '~/server-middleware/sitemap.js'
    },
    loading: {
        color: '#ED2939',
        height: '2px',
        duration: 3000,
        continuous: true,
        throttle: 0
    },
    css: [
        '~/assets/styles/index.scss',
        '@fancyapps/ui/src/Fancybox/Fancybox.scss'
    ],
    plugins: [
        {src: '~/plugins/rangeSlider.js', mode: 'client'},
        {src: "~/plugins/pagination.js", mode: 'client'},
        {src: "~/plugins/fancyapps-ui.js", mode: 'client'},
        {src: '~/plugins/infiniteLoading.js', mode: 'client'},
        {src: '~/plugins/numberAnim.js', mode: 'client'},
        {src: '~/plugins/ymaps.js', mode: 'client'},
        {src: '~/plugins/swiper.js'},
        {src: '~/plugins/inputmask.js'},
        {src: '~/plugins/slideToggle.js'},
        {src: '~/plugins/lodash.js'},
        {src: '~/plugins/tippy.js'},
        {src: '~/plugins/helpers.js'},
        {src: '~/plugins/jsonld'}

    ],
    components: true,
    router: {
        prefetchLinks: false,
        linkActiveClass: 'active',
        linkExactActiveClass: 'active'
    },
    modules: [
        'vue-scrollto/nuxt',
        '@nuxtjs/style-resources',
        '@nuxtjs/apollo',
        '@nuxtjs/device',
        '@nuxtjs/axios',
        '@nuxtjs/svg-sprite',
        '@nuxtjs/redirect-module'
    ],
    redirect: redirects,
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
                httpEndpoint: process.env.API_DOMAIN + '/graphql',
                persisting: true
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
        extend(config, { isClient }) {
          // Extend only webpack config for client-bundle
          if (isClient) {
            config.devtool = 'source-map'
          }
        },
        filenames:
            {
                // app: ({
                //           isDev,
                //           isModern
                //       }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `[id].[contenthash:7]${isModern ? '.modern' : ''}.js`,
                chunk: ({
                            isDev,
                            isModern
                        }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `[id].[contenthash:7]${isModern ? '.modern' : ''}.js`,
                css: ({isDev}) => isDev ? '[name].css' : 'css/[contenthash:7].css',
                img: ({isDev}) => isDev ? '[path][name].[ext]' : 'img/[name].[ext]',
                font: ({isDev}) => isDev ? '[path][name].[ext]' : 'fonts/[name].[contenthash:7].[ext]',
                video: ({isDev}) => isDev ? '[path][name].[ext]' : 'videos/[name].[contenthash:7].[ext]'
            },
        ...(!isDev && {
            html: {
                minify: {
                    collapseBooleanAttributes: true,
                    decodeEntities: true,
                    minifyCSS: true,
                    minifyJS: true,
                    processConditionalComments: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    trimCustomFragments: true,
                    useShortDoctype: true
                }
            }
        }),
        splitChunks: {
            layouts: true,
            pages: true,
            commons: true
        },
        optimization: {
            minimize: !isDev
        },
        ...(!isDev && {
            extractCSS: {
                ignoreOrder: true
            }
        }),
        loaders: {
            scss: {
                implementation: require('sass')
            }
        }
    },
    // server: {
    //     host: "0.0.0.0"
    // },
    publicRuntimeConfig: {
        api_domain: process.env.API_DOMAIN,
        domain: process.env.DOMAIN,
        domain_dev: process.env.DOMAIN_DEV,
        domain_spb: process.env.DOMAIN_SPB,
        domain_kaluga: process.env.DOMAIN_KALUGA,
        domain_carro_rf: process.env.DOMAIN_CARRO_RF,
        site_id: process.env.SITE_ID,
        site_id_spb: process.env.SITE_ID_SPB,
        site_id_kaluga: process.env.SITE_ID_KALUGA,
        site_id_carro_rf: process.env.SITE_ID_CARRO_RF,
        site_id_dev: process.env.SITE_ID_DEV

    }
}
