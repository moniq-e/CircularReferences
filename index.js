class Node {
  //Node references
  constructor(...index) {
    this.bonds = index
  }
}

const nodes = [
  new Node(1, 5),
  new Node(2, 0),
  new Node(3, 1),
  new Node(4, 2),
  new Node(5, 3),
  new Node(0, 4),

  new Node(7),
  new Node(8, 6),
  new Node(6, 7), 

  new Node(10),
  new Node(11, 9),
  new Node(9, 10)
]
const connections = 6

let qnt = 0
for (let i = 0; i < nodes.length; i++) {
  if (check(nodes[i])) qnt++
}
console.log(qnt, Math.floor(qnt/connections))

function check(node) {
  if (!node.bonds.length) return
  let array = [...node.bonds]
  let tempArray = []
  let previous = nodes.indexOf(node)
  let previousArray = [array.toString()]

  for (let _ = 0; _ < connections - 1; _++) {
    console.log(_, nodes.indexOf(node), array)
    for (let i = 0; i < array.length; i++) {
        let bonds = nodes[array[i]].bonds.filter(e => e != previous)
        tempArray.push(...bonds)
    }
    previous = array[_]
    array = [...tempArray]
    if (previousArray.includes(array.toString())) return false
    previousArray.push(array.toString())
    tempArray = []
  }
  if (array.includes(nodes.indexOf(node))) return true
}
