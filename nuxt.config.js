import {redirects} from './configModules'
import {routersArray} from './routers.js'

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
      {name: 'for-vk', content: 'forVK5807'},
      {name: 'yandex-verification', content: 'f70bc9bad3cb4352'},
      {name: 'google-site-verification', content: 'bWKRxv7GJwHjT2LiBTxTJHGkT_2MjLWJfRbE4_uJbrU'},
      {name: 'theme-color', content: '#ED2939'},
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
    '@fancyapps/ui/dist/fancybox/fancybox.css'
  ],
  plugins: [
    {src: '~/plugins/rangeSlider.js', mode: 'client'},
    {src: "~/plugins/pagination.js", mode: 'client'},
    {src: '~/plugins/infiniteLoading.js', mode: 'client'},
    {src: '~/plugins/numberAnim.js', mode: 'client'},
    {src: '~/plugins/ymaps.js', mode: 'client'},
    {src: '~/plugins/swiper.js'},
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
    linkExactActiveClass: 'active',
    extendRoutes(routes, resolve) {
      return routersArray(resolve)
    }


    // extendRoutes(routes, resolve) {
    //
    //     console.log(resolve)
    //     thanks_pages.forEach(value => {
    //         routes.push({
    //             name: value,
    //             path: `/${value}`,
    //             component: resolve(__dirname, 'pages/test.vue'),
    //             chunkName: `pages/${value}`
    //         })
    //     })
    //     console.log(routes)
    // }
  },
  ssr: true,
  target: 'server',
  modules: [
    'vue-scrollto/nuxt',
    '@nuxtjs/apollo',
    '@nuxtjs/device',
    '@nuxtjs/axios',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/redirect-module',
    'nuxt-ssr-cache',
    'cookie-universal-nuxt'
  ],
  // ...(!isDev && {
  //   cache: {
  //     // if you're serving multiple host names (with differing
  //     // results) from the same server, set this option to true.
  //     // (cache keys will be prefixed by your host name)
  //     // if your server is behind a reverse-proxy, please use
  //     // express or whatever else that uses 'X-Forwarded-Host'
  //     // header field to provide req.hostname (actual host name)
  //     useHostPrefix: false,
  //     pages: [
  //       '/',
  //     ],
  //
  //     key(route, context) {
  //       if (route === '/') {
  //         return 'page:home:string';
  //       }
  //       let page = route.substr(1).split('/');
  //       page = page.join('.');
  //       return `page:${page}:string`;
  //     },
  //
  //     store: {
  //       type: 'redis',
  //       host: 'localhost',
  //       ttl: 10 * 60,
  //       configure: [
  //         ['maxmemory', '200mb'],
  //         ['maxmemory-policy', 'allkeys-lru'],
  //       ],
  //     },
  //   }
  //   }),
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
        httpEndpoint: process.env.API,
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
    extend(config, {isClient}) {
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
  publicRuntimeConfig: {
    api: process.env.API
  }
  // server: {
  //     host: "0.0.0.0"
  // }
}
