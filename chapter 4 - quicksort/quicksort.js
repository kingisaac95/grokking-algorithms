function quicksort(arr) {
  if (arr.length < 2) {
    return arr
  } else {
    const pivot = arr[0]
    const less = arr.slice(1).filter(item => item < pivot)
    const greater = arr.slice(1).filter(item => item > pivot)

    return quicksort(less).concat([pivot], quicksort(greater))
  }
}

console.log(quicksort([3, 4, 62, 1, 7, 4, 9, 0]))
