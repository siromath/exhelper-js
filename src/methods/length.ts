import { isObject } from './index'

export const length = (arg: unknown) => {
  if (Array.isArray(arg) || typeof arg === 'string') {
    return arg.length
  } else if (isObject(arg)) {
    return Object.keys(arg).length
  } else {
    return undefined
  }
}
