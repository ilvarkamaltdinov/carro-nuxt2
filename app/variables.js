export const apiDomain = 'api.carro.rf'
export const apiSlug = 'carro'
export const domains = [
    //первый домен ГЛАВНЫЙ и используется для 'DEV'
    //если домен на кириллице, то домен в punycode
    {
        domain: 'carro.ru',
        siteId: 21,
        catalogRoute: 'used',
        root: true
    },
    {
        domain: 'dev.carro.ru',
        siteId: 21,
        catalogRoute: 'used',
        root: false
    },
    //карро.рф
    {
        domain: 'xn--80atnha.xn--p1ai',
        siteId: 28,
        catalogRoute: 'used',
        root: false
    },
    //спб-карро.рф
    {
        domain: 'xn----8sbb1bvblac.xn--p1ai',
        siteId: 104,
        catalogRoute: 'used',
        root: false
    },
    //региональные
    {
        domain: 'spb.carro.ru',
        siteId: 30,
        catalogRoute: 'used',
        root: false
    },
    {
        domain: 'kaluga.carro.ru',
        siteId: 31,
        catalogRoute: 'used',
        root: false
    },
    {
        domain: 'krsk.carro.ru',
        siteId: 108,
        catalogRoute: 'used',
        root: false
    }
]
export const mainDomain = domains.filter(value => value.root === true)[0]