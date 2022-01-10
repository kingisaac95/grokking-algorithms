const graph = {
  "you": ["alice", "bob", "claire"],
  "bob": ["anuj", "peggy"],
  "alice": ["peggy"],
  "claire": ["thom", "jonny"],
  "anuj": [],
  "peggy": [],
  "thom": [],
  "jonny": [],
}

function personIsSeller(name) {
  return name[name.length - 1] === 'm'
}

function search(name) {
  let searchQueue = graph[name]
  const searched = [];

  while (searchQueue.length) {
    const person = searchQueue.shift()
    if (!searched.includes(person)) {
      if (personIsSeller(person)) {
        console.log(person + ' is a mango seller!')
        return true
      } else {
        searchQueue = searchQueue.concat(graph[person])
        searched.push(person)
      }
    }
  }

  return false
}

search('you')