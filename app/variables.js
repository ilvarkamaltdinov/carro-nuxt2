export const apiDomain = 'api.карро.рф'
export const apiSlug = 'carro'
export const domains = [
    //первый домен ГЛАВНЫЙ и используется для 'DEV'
    //если домен на кириллице, то домен в punycode
    {
        domain: 'carro.ru',
        slug: 'carro',
        api: 'api.carro.ru',
        siteId: 21,
        isIndex: true,
        showComm: true,
        showEurope: true,
        showReviews: true,
        showBlog: true
    },
    //карро.рф
    {
        domain: 'xn--80atnha.xn--p1ai',
        siteId: 28,
        api: 'api.карро.рф',
        isIndex: false,
        showComm: true,
        showEurope: true,
        showReviews: true,
        showBlog: true
    },
    //спб-карро.рф
    {
        domain: 'xn----8sbb1bvblac.xn--p1ai',
        siteId: 104,
        api: 'api.карро.рф',
        isIndex: true,
        showComm: false,
        showEurope: false,
        showReviews: true,
        showBlog: false
    },
    //региональные
    {
        domain: 'spb.carro.ru',
        slug: 'spb-carro',
        siteId: 30,
        api: 'api.карро.рф',
        isIndex: true,
        showComm: false,
        showEurope: false,
        showReviews: true,
        showBlog: false
    },
    {
        domain: 'kaluga.carro.ru',
        slug: 'kaluga-carro',
        api: 'api.карро.рф',
        siteId: 31,
        isIndex: true,
        showComm: false,
        showEurope: false,
        showReviews: false,
        showBlog: false
    },
    {
        domain: 'krsk.carro.ru',
        slug: 'krsk-carro',
        api: 'api.карро.рф',
        siteId: 108,
        isIndex: true,
        showComm: false,
        showEurope: false,
        showReviews: false,
        showBlog: false
    },
    {
        domain: 'nsk.carro.ru',
        slug: 'nsk-carro',
        api: 'api.карро.рф',
        siteId: 112,
        isIndex: true,
        showComm: false,
        showEurope: false,
        showReviews: false,
        showBlog: false
    }
]
export const devDomain = {
    domain: 'dev.carro.ru',
    slug: 'dev-carro',
    api: 'api.карро.рф',
    siteId: 112,
    isIndex: false,
    showComm: false,
    showEurope: false,
    showReviews: false,
    showBlog: false
}

export function findDomain(host) {
    return domains.find(value => value.domain === host) || devDomain
}