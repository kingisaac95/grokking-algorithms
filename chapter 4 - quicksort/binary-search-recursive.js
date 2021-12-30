// find position of `target` in subarray nums[left…right]
function binarySearch(arr, left, right, target) {
  //  base case
  if (left > right) {
    return -1
  }

  const mid = Math.floor((left + right) / 2)

  if (arr[mid] === target) {
    return mid
  } else if (arr[mid] > target) {
    // move right pointer to the item before mid
    return binarySearch(arr, left, mid - 1, target)
  } else {
    // move left pointer to the item after mid
    return binarySearch(arr, mid + 1, right, target)
  }
}

const arr = [1, 3, 5, 7, 9]
right = arr.length - 1
left = 0

console.log(binarySearch(arr, left, right, 3))
console.log(binarySearch(arr, left, right, -1))