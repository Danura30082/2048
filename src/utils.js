/**
 * Returns the cell at the specified coordinates.
 * @param {number} i - The index of the row.
 * @param {number} j - The index of the column.
 * @returns {HTMLTableCellElement} The cell at the specified coordinates.
 * @see {@link getTable}
 */

export function getCell(i, j) {
    let table = getTable();
    return table.rows[i].cells[j];
}

/**
 * Returns the game board.
 * @returns {HTMLTableElement} The game board.
 */
function getTable() {
    let table = document.getElementById("table");
    return table;

}
/**
 * Returns a random integer between min and max.
 * @param {number} min - The minimum value of the random integer.
 * @param {number} max - The maximum value of the random integer.
 * @returns {number} A random integer between min and max.
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns the coordinates of an empty cell in the game board.
 * @returns {Array} The coordinates of an empty cell in the game board.
 */
function getEmpty() {
    if (hasEmpty()) {
        var i = getRandomInt(0, 3);
        var j = getRandomInt(0, 3);
        while (!(isEmpty(i, j))) {
            i = getRandomInt(0, 3);
            j = getRandomInt(0, 3);
        }
        return [i, j];
    }
}

/**
 * Adds a new number (2 or 4) to the game board.
 * 85% chance of getting a 2, 15% chance of getting a 4.
 * @see {@link getEmpty}
 * @see {@link getRandom2or4}
 */
export function newNumber() {
    if (hasEmpty()) {
        var coord = getEmpty();
        console.log(coord);
        let random = getRandom2or4(85);
        setValue(coord[0], coord[1], random);
    }
}

/**
 * Ramdomly returns 2 or 4 depending on the percentage.
 * @see {@link getRandomInt}
 * @param {number} percent - The percentage of getting a 2.
 * @returns {number} A random integer between 2 and 4.
 */
function getRandom2or4(percent) {
    if (getRandomInt(0, 100) < percent) {
        return 2;
    }
    else {
        return 4;
    }
}

/**
 * Checks if there is an empty cell in the game board.
 * @returns {boolean} True if there is an empty cell in the game board, false otherwise.
 */
export function hasEmpty() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j <= 3; j++) {
            if (isEmpty(i, j)) {
                return true;
            }
        }
    }
    return false;
}

/**
 * Checks if a cell is empty.
 * @param {number} i - The index of the row.
 * @param {number} j - The index of the column.
 * @returns {boolean} True if the cell is empty, false otherwise.
 */
function isEmpty(i, j) {
    if (getCell(i, j).innerHTML == "*") {
        return true;
    }
    else {
        return false;
    }
}

/**
 * Sets the value of the cell at the specified coordinates.
 * @param {number} i - The index of the row.
 * @param {number} j - The index of the column.
 * @param {number} valeur - The value to set the cell to.
 * @returns {void}
 * @see {@link getCell}
 */
export function setValue(i, j, valeur) {
    getCell(i, j).innerHTML = valeur;
}

/**
 * Sets the game board to the specified board.
 * @param {Array} Board - The board to set the game board to. Set an empty board if no board is specified.
 * @returns {void}
 */
export function set_Board(Board = null) {
    if (Board == null) {
        var Board = [
            ["*", "*", "*", "*"],
            ["*", "*", "*", "*"],
            ["*", "*", "*", "*"],
            ["*", "*", "*", "*"]
        ];
    }

    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            setValue(i, j, Board[i][j]);
        }
    }
}