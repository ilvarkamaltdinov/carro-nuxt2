import isEmpty from 'lodash/isEmpty'
export default ({app}, inject) => {
  inject('stringToArray', input => Array.isArray(input) ? [...input] : (input ? [input] : []))
  inject('numberToArray', input => Array.isArray(input) ? [...input.map(item => Number(item))] : (input ? [Number(input)] : []))
  inject('removeEmptyObjects', obj => Object.fromEntries(Object.entries(obj).filter(([_, v]) =>
      typeof v === 'number' ? !!(v) : !isEmpty(v)
  )))
}