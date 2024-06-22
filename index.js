class Cell {
	/**
	 * @type {number[]} Cell references
	 */
	bonds
	/**
	 * Cell references
	 * @param  {...number} index 
	 */
	constructor(...index) {
		this.bonds = index
	}
}

const cells = [
	// new Cell(1, 5),
	// new Cell(2, 0),
	// new Cell(3, 1),
	// new Cell(4, 2),
	// new Cell(5, 3),
	// new Cell(0, 4),

	new Cell(1, 4),
	new Cell(2, 0),
	new Cell(3, 1),
	new Cell(4, 2),
	new Cell(0, 3),
	
]
const connections = 6

let date = Date.now()
let qnt = 0
for (let i = 0; i < cells.length; i++) {
	if (check(cells[i])) qnt++
}
console.log(qnt, Math.floor(qnt / connections), Date.now() - date + "ms")

/**
 * @param {Cell} cell 
 */
function check(cell) {
	if (!cell.bonds.length) return

	let flow = [[[cells.indexOf(cell)]], [cell.bonds]]
	if (cells[flow[1][0][0]].bonds.includes(flow[0][0][0]) && connections == 2) return true

	for (let i = 2; i < connections + 1; i++) {
		flow[i] = []
	}

	for (let x = 1; x < flow.length - 1; x++) {
		let zcounter = 0

		if (flow[x].length == 0) return false
		if ((connections % x == 0) && flow[x].reduce((p, c) => p.concat(c)).includes(cells.indexOf(cell))) return false

		for (let y = 0; y < flow[x].length; y++) {
			for (let z = 0; z < flow[x][y].length; z++) {

				const ycounter = zcounter
				const cell = cells[flow[x][y][z]]
				flow[x+1][zcounter] = []
				cell.bonds.filter(c => c != flow[x - 1][Math.floor(y/2)][Math.floor(y/2)]).forEach((c, i) => {
					flow[x+1][ycounter][i] = c
				})
				zcounter++
			}
		}
	}
	if (flow[connections].length && flow[connections].reduce((p, c) => p.concat(c)).includes(cells.indexOf(cell))) return true
}