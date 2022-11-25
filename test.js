function rule30(list, n) {
    let cells = [...list];
    let iterations = n;
    let i = 0;
    while (iterations > 0) {

        while (i < cells.length) {
            let nextCell = generateNextCell(cells, i);
            cells.splice(i, 1, ...nextCell);
            i += 3;
        }

        iterations--;
    }

    return (cells)
}

let Rule30Obj = {
    '000': 0,
    '001': 1,
    '010': 1,
    '011': 1,
    '100': 1,
    '101': 0,
    '110': 0,

}

console.log(rule30([0], 2))

function generateNextCell(list, index) {
    let prevCell = list[index - 1] === undefined ? 0 : list[index - 1];
    let nextCell = list[index + 1] === undefined ? 0 : list[index + 1];
    let currCell = list[index]

    let prevCell_Next = Rule30Obj[`${prevCell}${currCell}${nextCell}`];

    return [Number(prevCell_Next), Number(currCell_Next), Number(nextCell_Next)]
}

