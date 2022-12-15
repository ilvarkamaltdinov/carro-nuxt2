const {Router} = require('express')
const axios = require('axios')
const router = Router()
let routes = [
    {
        from: 'https://api.genzes.ru/feeds/yandex/xml/carro-rf/main',
        to: '/autoru/cars_rf.xml'
    },
    {
        from: 'https://api.genzes.ru/feeds/yandex/xml/carro-rf/avtograd',
        to: '/yandex/autograd/offers.xml'
    },
    {
        from: 'https://api.genzes.ru/feeds/yandex/xml/carro-rf/prime',
        to: '/yandex/prime/offers.xml'
    },
    {
        from: 'https://api.genzes.ru/feeds/yandex/xml/carro-rf/komm-auto',
        to: '/yandex/comm/offers.xml'
    },
    {
        from: 'https://api.genzes.ru/feeds/yandex/xml/carro-rf/before-400',
        to: '/yandex/before-400/offers.xml'
    },
    {
        from: 'https://api.genzes.ru/feeds/yandex/xml/carro-rf/after-400',
        to: '/yandex/after-400/offers.xml'
    },
    {
        from: 'https://api.genzes.ru/feeds/yandex/xml/carro/main',
        to: '/autoru/cars.xml'
    },
    {
        from: 'https://api.genzes.ru/feeds/google/xml/carro/main',
        to: '/mytarget/offers.xml'
    }
]

routes.forEach(route => {
    router.get(route.to, async (req, res) => {
        let response = await getXml(route.from)
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