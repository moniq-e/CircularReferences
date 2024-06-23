class Cell {
    //Cell references
    constructor(...index) {
        this.bonds = index
    }
}

const cells = [
    new Cell(1, 5),
    new Cell(2, 0),
    new Cell(3, 1),
    new Cell(4, 2),
    new Cell(5, 3),
    new Cell(0, 4)
]
const connections = 6
/**
 * @type {number[][]}
 */
const bonds = []
for (let i = 0; i < cells.length; i++) {
	const cell = cells[i]
	for (const bonded of cell.bonds) {
		if (!bonds.find(b => b[0] == bonded && b[1] == i)) bonds.push([i, bonded])
	}
}

let qnt = 0
for (let i = 0; i < bonds.length; i++) {
    if (check(bonds[i])) qnt++
}
console.log(qnt)

function check(initBond) {
	let bond = initBond
	for (let iterations = 0; iterations < (connections - 2); iterations++) {
		let find = bonds.find(b => b[0] == bond[1])
		if (find) {
			bond = find
		} else return false
	}
	if (bonds.find(b => b[0] == initBond[0] && b[1] == bond[1]) && initBond != bond) return true
}