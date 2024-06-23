class Cell {
    //Cell references
    constructor(...index) {
        this.bonds = index
    }
}

const cells = [
    new Cell(1),
    new Cell(2),
    new Cell(3),
    new Cell(4),
    new Cell(5),
    new Cell(0, 6),
    new Cell()
]
const connections = 6

let qnt = 0
for (let i = 0; i < cells.length; i++) {
    if (check(cells[i])) qnt++
}
console.log(Math.floor(qnt/connections))

function check(cell) {
    if (!cell.bonds.length) return
    let array = [...cell.bonds]
    let tempArray = []
    for (let _ = 0; _ < connections - 1; _++) {
        for (let i = 0; i < array.length; i++) {
            tempArray.push(...cells[array[i]].bonds)
        }
        array = [...tempArray]
        tempArray = []
    }
    if (array.includes(cells.indexOf(cell))) return true
}
