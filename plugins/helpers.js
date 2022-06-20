import _ from 'lodash'
import Vue from 'vue'

Vue.prototype.$removeEmptyObjects = (obj) => {
  return _(obj)
      .pickBy(_.isObject) // pick objects only
      .omitBy(_.isEmpty) // remove all empty objects
      .assign(_.omitBy(obj, _.isObject)) // assign back primitive values
      .value();
}
Vue.prototype.$stringToArray = (input) => {
  return Array.isArray(input) ? [...input] : (input ? [input] : [])
}
export default ({app}, inject) => {
  inject('stringToArray', input => Array.isArray(input) ? [...input] : (input ? [input] : []))
  inject('numberToArray', input => Array.isArray(input) ? [...input.map(item => Number(item))] : (input ? [Number(input)] : []))
}