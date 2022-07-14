import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'
Vue.use(YmapPlugin)

// or for a single instance
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
new Vue({
    components: { yandexMap, ymapMarker }
})

