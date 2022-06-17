import _ from 'lodash'
import Vue from 'vue'


Vue.prototype.$removeEmptyObjects = (obj) => {
  return _(obj)
    .pickBy(_.isObject) // pick objects only
    .omitBy(_.isEmpty) // remove all empty objects
    .assign(_.omitBy(obj, _.isObject)) // assign back primitive values
    .value();
}
