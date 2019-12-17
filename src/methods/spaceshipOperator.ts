export const spaceshipOperator = (value1: number, value2: number) => {
  if (value1 < value2) {
    return -1
  } else if (value1 > value2) {
    return 1
  } else {
    return 0
  }
}
