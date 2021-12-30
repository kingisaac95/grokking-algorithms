function findMax(list) {
  if (list.length < 2) {
    return list[0]
  }
  else {
    return Math.max(list[0], findMax(list.slice(1)))
  }
}
console.log(findMax([2, 8, 4, 6]))
