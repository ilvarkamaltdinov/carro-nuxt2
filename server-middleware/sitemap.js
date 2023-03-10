const axios = require('axios')
import {findDomain} from '../app/variables'
export default async function (req, res, next) {
    let link = ''
    if(findDomain(req.headers.host).isIndex){
        link = `https://${findDomain.api}/sitemap/xml/${findDomain.slug}`
    }
    // if(req.headers.host === 'carro.ru'){
    //     link = 'https://api.carro.ru/sitemap/xml/carro'
    // }
    // else if(req.headers.host === 'spb.carro.ru'){
    //     link = 'https://api.genzes.ru/sitemap/xml/spb-carro'
    // }
    // else if(req.headers.host === 'kaluga.carro.ru'){
    //     link = 'https://api.genzes.ru/sitemap/xml/kaluga-carro'
    // }
    // else if(req.headers.host === 'krsk.carro.ru'){
    //     link = 'https://api.genzes.ru/sitemap/xml/krsk-carro'
    // }
    if(link !== ''){
        let response = await getXml(link)
        res.setHeader('Content-Type', response.headers['content-type']);
        res.end(response.data);
    }
    // res is the Node.js http response object

    // next is a function to call to invoke the next middleware
    // Don't forget to call next at the end if your middleware is not an endpoint!
    next()
}

async function getXml(link) {
    return axios({
        method: 'get',
        url: link
    });
}
