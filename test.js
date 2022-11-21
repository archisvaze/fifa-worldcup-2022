const knightOffsets = [[-2, 1], [-2, -1], [2, 1], [2, -1], [-1, 2], [-1, -2], [1, 2], [1, -2]];

const isValid = (cell) => cell[0] >= 0 && cell[0] < 8 && cell[1] >= 0 && cell[1] <= 8


const findNextSquaresForOne = (currentSquare) => {
    let nextSquares = [];
    for (let offsetIdx = 0; offsetIdx < knightOffsets.length; offsetIdx++) {
        let offset = knightOffsets[offsetIdx];
        let nextSquare = [currentSquare[0] + offset[0], currentSquare[1] + offset[1]]
        if (isValid(nextSquare)) {
            nextSquares.push(nextSquare);
        }
    }
    return nextSquares;
}

// [1, 2]

// [[1, 2], [2 ,3]]


const findNextSquaresForOne2 = (currentSquare) => knightOffsets.map((arr) => [currentSquare[0] + arr[0], currentSquare[1] + arr[1]]).filter(isValid)




// console.log(findNextSquaresForOne2([2, 0]))


function allAlone(house) {
    let roof = true;
    let wallend = false;
    let insideroom = false

    for (let arr of house) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "#" && roof === true) {
                wallend = false;
                insideroom = false;
            }
            if (arr[i] !== "#" && roof === true) {
                wallend = true;
                insideroom = false;
            }
            if(arr[i] !=="#" && wallend === true){

            }
            if(arr[i] === "#" && insideroom === true){
                wallend = true;
                insideroom = false;
            }
            if (arr[i] === "o" && insideroom === true) {
                return false;
            }
        }
    }
    return true;
}


allAlone([
    [
        ' ', ' ', 'o', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', 'o', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        '#', '#', '#', '#', '#', '#', '#'
    ],
    [
        '#', '#', '#', '#', '#', '#', '#',
        '#', '#', '#', '#', '#', '#', '#',
        '#', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        '#', ' ', ' ', ' ', ' ', ' ', '#'
    ],
    [
        '#', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        '#', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', 'o', ' ', ' ', ' ', ' ',
        '#', ' ', ' ', ' ', ' ', ' ', '#'
    ],
    [
        '#', ' ', ' ', 'X', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        '#', '#', '#', '#', '#', '#', '#',
        '#', '#', '#', '#', '#', '#', '#',
        '#', ' ', ' ', ' ', ' ', ' ', '#'
    ],
    [
        '#', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', '#'
    ],
    [
        '#', '#', '#', '#', '#', '#', '#',
        '#', '#', '#', '#', '#', '#', '#',
        '#', '#', '#', '#', '#', '#', '#',
        '#', '#', '#', '#', '#', '#', '#',
        '#', '#', '#', '#', '#', '#', '#'
    ]
])