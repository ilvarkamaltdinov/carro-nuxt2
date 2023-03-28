export function routersArray(resolve) {

    let dealers = [
        'ac-frunze',
        'ac-vzletka',
        'atc-aura',
        'atc-gagarina',
        'avangard',
        'avtodom',
        'avtograd',
        'avtonomiia',
        'azimut',
        'carvana',
        'comm',
        'europe',
        'fora',
        'formax',
        'karplaza',
        'plaza',
        'praim-avto',
        'prime',
        'ralff',
        'stels',
        'tyumen',
    ]

    let catalog = [
        // каталог
        {
            name: 'category',
            path: '/:category',
            component: resolve(__dirname, '_pages/_category/index.vue'),
        },
        {
            name: 'category-mark',
            path: '/:category/:mark',
            component: resolve(__dirname, '_pages/_category/_mark/index.vue'),
        },
        {
            name: 'category-mark-model',
            path: '/:category/:mark/:model',
            component: resolve(__dirname, '_pages/_category/_mark/_model/index.vue'),
        },
        {
            name: 'category-mark-model-car',
            path: '/:category/:mark/:model/:car',
            component: resolve(__dirname, '_pages/_category/_mark/_model/_car/index.vue'),
        },
    ]

    let routers = [
        {
            name: 'main',
            path: '/',
            component: resolve(__dirname, '_pages/index.vue')
        },
        {
            name: 'about',
            path: '/about',
            component: resolve(__dirname, '_pages/about.vue')
        },
        {
            name: 'rassrochka',
            path: '/rassrochka',
            component: resolve(__dirname, '_pages/rassrochka.vue')
        },
        {
            name: 'exchange',
            path: '/exchange',
            component: resolve(__dirname, '_pages/exchange.vue')
        },
        {
            name: 'besplatnyij-podbor-avtomobilya',
            path: '/besplatnyij-podbor-avtomobilya',
            component: resolve(__dirname, '_pages/besplatnyij-podbor-avtomobilya.vue')
        },
        {
            name: 'buyout',
            path: '/buyout',
            component: resolve(__dirname, '_pages/buyout.vue')
        },
        {
            name: 'contacts',
            path: '/contacts',
            component: resolve(__dirname, '_pages/contacts.vue')
        },
        {
            name: 'knowledge',
            path: '/knowledge',
            component: resolve(__dirname, '_pages/knowledge.vue')
        },
        {
            name: 'contact',
            path: '/contact',
            component: resolve(__dirname, '_pages/contact/index.vue')
        },
        {
            name: 'contact-dealer',
            path: '/contact/:dealer',
            component: resolve(__dirname, '_pages/contact/_dealer/index.vue')
        },
        {
            name: 'banks-partners',
            path: '/banks-partners',
            component: resolve(__dirname, '_pages/banks-partners.vue')
        },
        {
            name: 'best-moscow-autosalon',
            path: '/best-moscow-autosalon',
            component: resolve(__dirname, '_pages/best-moscow-autosalon.vue')
        },
        {
            name: 'best-autosalon',
            path: '/best-autosalon',
            component: resolve(__dirname, '_pages/best-autosalon.vue')
        },
        {
            name: 'reviews-dealers',
            path: '/reviews-dealers',
            component: resolve(__dirname, '_pages/reviews-dealers.vue')
        },
        {
            name: 'privacy',
            path: '/privacy',
            component: resolve(__dirname, '_pages/reviews-dealers.vue')
        },
        {
            name: 'credit',
            path: '/credit',
            component: resolve(__dirname, '_pages/credit/index.vue'),
        },
        {
            name: 'credit-bank',
            path: '/credit/:bank',
            component: resolve(__dirname, '_pages/credit/_bank/index.vue'),
        },
        {
            name: 'news',
            path: '/news',
            component: resolve(__dirname, '_pages/news/index.vue'),
        },
        {
            name: 'news-article',
            path: '/news/:article',
            component: resolve(__dirname, 'components/blog/article.vue'),
        },
        {
            name: 'blog',
            path: '/blog',
            component: resolve(__dirname, '_pages/blog/index.vue'),
        },
        {
            name: 'blog-articles',
            path: '/blog/articles',
            component: resolve(__dirname, '_pages/blog/articles/index.vue'),
        },
        {
            name: 'blog-ratings',
            path: '/blog/ratings',
            component: resolve(__dirname, '_pages/blog/ratings/index.vue'),
        },
        {
            name: 'blog-articles-article',
            path: '/blog/articles/:article',
            component: resolve(__dirname, 'components/blog/article.vue'),
        },
        {
            name: 'blog-ratings-article',
            path: '/blog/ratings/:article',
            component: resolve(__dirname, 'components/blog/article.vue'),
        },
        {
            name: 'favorites',
            path: '/favorites',
            component: resolve(__dirname, '_pages/favorites.vue'),
        },
        {
            name: 'call-thanks',
            path: '/call-thanks',
            component: resolve(__dirname, '_pages/thanks.vue'),
        },
        {
            name: 'selection-thanks',
            path: '/selection-thanks',
            component: resolve(__dirname, '_pages/thanks.vue'),
        },
        {
            name: 'rassrochka-thanks',
            path: '/rassrochka-thanks',
            component: resolve(__dirname, '_pages/thanks.vue'),
        },
        {
            name: 'buyout-thanks',
            path: '/buyout-thanks',
            component: resolve(__dirname, '_pages/thanks.vue'),
        },
        {
            name: 'servise-tnx',
            path: '/servise-tnx',
            component: resolve(__dirname, '_pages/thanks.vue'),
        },
        {
            name: 'tradein-thanks',
            path: '/tradein-thanks',
            component: resolve(__dirname, '_pages/thanks.vue'),
        },
        {
            name: 'uslugi-servisa',
            path: '/uslugi-servisa',
            component: resolve(__dirname, '_pages/uslugi-servisa.vue'),
        },
        {
            name: 'sitemap',
            path: '/sitemap',
            component: resolve(__dirname, '_pages/sitemap.vue'),
        },
    ]

    let thanksRouts = []

    dealers.forEach((value, key) => {
        thanksRouts.push(
            {
                name: `thanks-${value}`,
                path: `/thanks-${value}`,
                component: resolve(__dirname, '_pages/thanks.vue'),
            },
            {
                name: `call-thanks-${value}`,
                path: `/call-thanks-${value}`,
                component: resolve(__dirname, '_pages/thanks.vue'),
            },
            {
                name: `rassrochka-thanks-${value}`,
                path: `/rassrochka-thanks-${value}`,
                component: resolve(__dirname, '_pages/thanks.vue'),
            },
            {
                name: `tradein-thanks-${value}`,
                path: `/tradein-thanks-${value}`,
                component: resolve(__dirname, '_pages/thanks.vue'),
            },
        )
    })

    routers.push(...thanksRouts)
    routers.push(...catalog)

    return routers
}
