class Node {
    //Node references
    constructor(...index) {
        this.bonds = index
    }
}

const nodes = [
    new Node(1),
    new Node(2),
    new Node(3),
    new Node(4),
    new Node(5),
    new Node(0, 6),
    new Node()
]
const connections = 6

let qnt = 0
for (let i = 0; i < nodes.length; i++) {
    if (check(nodes[i])) qnt++
}
console.log(Math.floor(qnt/connections))

function check(node) {
    if (!node.bonds.length) return
    let array = [...node.bonds]
    let tempArray = []
    for (let _ = 0; _ < connections - 1; _++) {
        for (let i = 0; i < array.length; i++) {
            tempArray.push(...nodes[array[i]].bonds)
        }
        array = [...tempArray]
        tempArray = []
    }
    if (array.includes(nodes.indexOf(node))) return true
}
