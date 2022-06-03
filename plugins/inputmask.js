import Vue from 'vue';
import Inputmask from "inputmask";
if (process.client) {
    window.zopa2 = Inputmask
}
Vue.use(Inputmask);