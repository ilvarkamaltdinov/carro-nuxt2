// import Vue from 'vue';
// import ionRangeSlider from 'vanilla-rangeslider'
// Vue.use(ionRangeSlider)
if (process.client) {
    window.ionRangeSlider = require('./libs/ionRangeSlider')
}