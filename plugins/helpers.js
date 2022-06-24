import _ from 'lodash'
export default ({app}, inject) => {
  inject('stringToArray', input => Array.isArray(input) ? [...input] : (input ? [input] : []))
  inject('stringToArray', input => Array.isArray(input) ? [...input] : (input ? [input] : []))
  inject('numberToArray', input => Array.isArray(input) ? [...input.map(item => Number(item))] : (input ? [Number(input)] : []))
  inject('removeEmptyObjects', obj => _(obj)
    .pickBy() // pick objects only
    .omitBy(_.isEmpty) // remove all empty objects
    .assign(_.omitBy(obj, _.isObject)) // assign back primitive values
    .value())
}
