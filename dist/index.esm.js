export default {
  '?:' (value1, value2) {
    return value1 ? value1 : value2
  },
  '??' (value1, value2) {
    return (value1 !== null) ? value1 : value2
  },
  '<=>' (value1, value2) {
    if (value1 < value2) {
      return -1
    } else if (value1 > value2) {
      return 1
    } else {
      return 0
    }
  },
  isObject (arg) {
    return typeof arg === 'object' && arg !== null && !Array.isArray(arg)
  },
  typeof (arg) {
    if (Array.isArray(arg)) {
      return 'array'
    } else if (arg === null) {
      return 'null'
    } else {
      return typeof arg
    }
  },
  length (arg) {
    if (Array.isArray(arg) || typeof arg === 'string') {
      return arg.length
    } else if (this.isObject(arg)) {
      return Object.keys(arg).length
    } else {
      return undefined
    }
  },
  sum (nums) {
    return nums.reduce((a, b) => a + b)
  },
  product (nums) {
    return nums.reduce((a, b) => a * b)
  }
}
