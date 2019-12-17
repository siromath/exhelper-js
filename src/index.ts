import {
  elvisOperator,
  nullishCoalescingOperator,
  spaceshipOperator,
  isObject,
  _typeof,
  length,
  sum,
  product
} from './methods'

export default {
  '?:': elvisOperator,
  '??': nullishCoalescingOperator,
  '<=>': spaceshipOperator,
  isObject,
  typeof: _typeof,
  length,
  sum,
  product
}
