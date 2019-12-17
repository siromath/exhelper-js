// `typeof`演算子との衝突を回避するため`_`を付与
export const _typeof = (arg: unknown) => {
  if (Array.isArray(arg)) {
    return 'array'
  } else if (arg === null) {
    return 'null'
  } else {
    return typeof arg
  }
}
