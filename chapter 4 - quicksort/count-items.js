function getSum(arr) {
  if (arr.length < 2) {
    return 1
  }

  return 1 + getSum(arr.slice(1))
}

console.log(getSum([2, 4, 6]))
