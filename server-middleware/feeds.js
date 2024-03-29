const {Router} = require('express')
const axios = require('axios')
const router = Router()
let routes = [
    {
        from: '/feeds/yandex/xml/carro-rf/main',
        to: '/autoru/cars_rf.xml'
    },
    {
        from: '/feeds/yandex/xml/carro-rf/avtograd',
        to: '/yandex/autograd/offers.xml'
    },
    {
        from: '/feeds/yandex/xml/carro-rf/prime',
        to: '/yandex/prime/offers.xml'
    },
    {
        from: '/feeds/yandex/xml/carro-rf/komm-auto',
        to: '/yandex/comm/offers.xml'
    },
    {
        from: '/feeds/yandex/xml/carro-rf/before-400',
        to: '/yandex/before-400/offers.xml'
    },
    {
        from: '/feeds/yandex/xml/carro-rf/after-400',
        to: '/yandex/after-400/offers.xml'
    },
    {
        from: '/feeds_file/yandex/xml/carro/file',
        to: '/autoru/cars.xml'
    },
    {
        from: '/feeds_file/google/xml/carro/file',
        to: '/mytarget/offers.xml'
    },
    {
        from: '/feeds/yandex/xml/kaluga-carro/feed',
        to: '/yandex/offers.xml'
    },
    {
        from: '/feeds/yandex/xml/spb-carro-rf/main',
        to: '/yandex/xml/spb-carro-rf/main'
    }
]

routes.forEach(route => {
    router.get(route.to, async (req, res) => {
        let domain = 'https://api.genzes.ru'
        if (req.headers.host === 'carro.ru') {
            domain = 'https://api.carro.ru'
        }
        let response = await getXml(domain + route.from)
        res.set('Content-Type', response.headers['content-type']);
        res.status(200).send(response.data);
    })
})


async function getXml(link) {
    return axios({
        method: 'get',
        url: link
    });
}

module.exports = router
