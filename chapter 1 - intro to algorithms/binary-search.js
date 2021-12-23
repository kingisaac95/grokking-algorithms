function binarySearch(arr, item) {
  let low = 0, high = arr.length - 1

  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    guess = arr[mid]

    if (guess === item) return mid

    if (guess > item) {
      high = mid - 1
    }
    else {
      low = mid + 1
    }
  }

  return null
}

arr = [1, 3, 5, 7, 9]

console.log(binarySearch(arr, 3))
console.log(binarySearch(arr, -1))
