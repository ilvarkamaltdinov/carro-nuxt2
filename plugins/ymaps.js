import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = { // you may define your apiKey, lang and version or skip this.
    apiKey: 'xxx',
    lang: 'ru_RU',
    version: '2.1'
}
Vue.use(YmapPlugin, settings)

