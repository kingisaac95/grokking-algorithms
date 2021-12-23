function findSmallest(arr) {
  let smallest = arr[0], smallestIndex = 0

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]
      smallestIndex = i
    }
  }
  return smallestIndex
}

function selectionSort(arr) {
  const newArr = []
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    smallestIndex = findSmallest(arr)
    value = arr.splice(smallestIndex, 1)[0]
    newArr.push(value)
  }
  return newArr
}

console.log(selectionSort([5, 3, 6, 2, 10, 8]))
