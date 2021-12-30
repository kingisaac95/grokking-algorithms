function getSum(arr) {
  if (arr.length < 2) {
    return arr[0]
  }

  return arr[0] + getSum(arr.slice(1))
}

console.log(getSum([2, 4, 6]))
