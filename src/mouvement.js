import { setValue,getCell } from "./utils.js";
import { STATE } from "./state.js";
import { update, GameOver } from "./ui.js";

/**
 * Moves all the cells in the game board to the left.
 * If the game board has changed, it adds a new number to the game board.
 * @see {@link update}
 * @see {@link leftAll}
 * @returns {void}
 */
export function gauche() {
    /* console.log("gauche"); */
    if (leftAll()) { update(); }
    else { console.log("Pas de mouvement ni de fusion possible"); GameOver(); }
}

/**
 * Moves all the cells in one row the game board to the left.
 * @param {number} i - The index of the row.
 * @returns {boolean} True if the row has changed, false otherwise
 */
function moveLeft(i) {
    var hasMoved = false;
    for (let j = 0; j <= 3; j++) {
        if (getCell(i, j).innerHTML == "*") {
            for (let k = j + 1; k <= 3; k++) {
                if (getCell(i, k).innerHTML != "*") {
                    hasMoved = true;
                    setValue(i, j, getCell(i, k).innerHTML);
                    setValue(i, k, "*");
                    break;
                }
            }
        }
    }
    return hasMoved;
}

/**
 * Fuses all the cells in one row the game board to the right. 
 * Increases the score if two cells are fused by the value of the fused cell.
 * @param {number} i - The index of the row.
 * @returns {boolean} True if the row has changed, false otherwise
 */
function fusionLeft(i) {
    var hasFused = false;
    for (let j = 0; j <= 2; j++) {
        if ((getCell(i, j).innerHTML == getCell(i, j + 1).innerHTML) && (getCell(i, j).innerHTML != "*")) {
            hasFused = true;
            STATE.Score += Number(getCell(i, j).innerHTML * 2);
            setValue(i, j, getCell(i, j).innerHTML * 2);
            setValue(i, j + 1, "*");
        }
    }
    return hasFused;
}

/**
 * Moves and fuses all the cells in a row to the Left. 
 * @see {@link moveLeft}
 * @see {@link fusionLeft}
 * @param {number} i - The index of the row.
 * @returns {boolean} True if the game board has changed, false otherwise
 */
function left(i) {
    var hasChanged = moveLeft(i) + fusionLeft(i) + moveLeft(i);
    if (hasChanged != 0) { hasChanged = true; }
    return hasChanged;
}

/**
 * Moves all the cells in the game board to the left.
 * @see {@link left}
 * @returns {boolean} True if the game board has changed, false otherwise
 */
export function leftAll() {
    var hasChanged = false;
    for (let i = 0; i < 4; i++) {
        hasChanged += left(i);
    }
    if (hasChanged != 0) { hasChanged = true; }
    return hasChanged;
}

/**
 * Moves and fuses all the cells in one row the game board to the right.
 * @param {number} i - The index of the row.
 * @see {@link moveRight}
 * @see {@link fusionRight}
 * @returns {boolean} True if the row has changed, false otherwise
 */
function right(i) {

    var hasChanged = moveRight(i) + fusionRight(i) + moveRight(i);
    if (hasChanged != 0) { hasChanged = true; }
    return hasChanged;
}

/**
 * Moves all the cells in the game board to the right.
 * @see {@link right}
 * @returns {boolean} True if the game board has changed, false otherwise
 */
export function rightAll() {
    var hasChanged = false;
    for (let i = 0; i < 4; i++) {
        hasChanged += right(i);

    }
    if (hasChanged != 0) { hasChanged = true; }
    return hasChanged;
}

/**
 * Fuses all the cells in one row the game board to the right.
 * Increases the score if two cells are fused by the value of the fused cell.
 * @param {number} i - The index of the row.
 * @returns {boolean} True if the row has changed, false otherwise
 */
function fusionRight(i) {
    var hasFused = false;
    for (let j = 3; j >= 1; j--) {
        if ((getCell(i, j).innerHTML == getCell(i, j - 1).innerHTML) && (getCell(i, j).innerHTML != "*")) {
            hasFused = true;
            STATE.Score += Number(getCell(i, j).innerHTML * 2);
            setValue(i, j, getCell(i, j).innerHTML * 2);
            setValue(i, j - 1, "*");
        }
    }
    return hasFused;
}

/**
 * Moves all the cells in one row the game board to the right.
 * @param {number} i - The index of the row.
 * @returns {boolean} True if the row has changed, false otherwise
 */
function moveRight(i) {
    var hasMoved = false;
    for (let j = 3; j >= 0; j--) {
        if (getCell(i, j).innerHTML == "*") {
            for (let k = j - 1; k >= 0; k--) {
                if (getCell(i, k).innerHTML != "*") {
                    hasMoved = true;
                    setValue(i, j, getCell(i, k).innerHTML);
                    setValue(i, k, "*");
                    break;
                }
            }
        }
    }
    return hasMoved;
}

/**
 * Moves all the cells in the game board to the right.
 * If the game board has changed, it adds a new number to the game board.
 * @see {@link rightAll}
 * @see {@link update}
 * @returns {void}
 */
export function droite() {
    if (rightAll()) { update(); }
    else { console.log("Pas de mouvement ni de fusion possible"); GameOver(); }
}

/** 
 * Moves all numbers in the specified column down.
 * @param {number} j - The index of the column.
 * @see {@link moveDown}
 * @see {@link fusionDown}
 * @return {boolean} True if the column has changed as a result of the move, false otherwise.
 */
function down(j) {
    var hasChanged = moveDown(j) + fusionDown(j) + moveDown(j);
    if (hasChanged != 0) { hasChanged = true; }
    return hasChanged;
}

/** 
 * Moves all numbers in all columns down.
 * @return {boolean} True if any column has changed as a result of the move, false otherwise.
 */
export function downAll() {
    var hasChanged = false;
    for (let j = 0; j < 4; j++) {
        hasChanged += down(j);
    }
    if (hasChanged != 0) { hasChanged = true; }
    return hasChanged;
}

/** 
 * Fuses numbers in the specified column down.
 * Increases the score if two cells are fused by the value of the fused cell.
 * @param {number} j - The index of the column.
 * @return {boolean} True if any numbers in the column have been fused, false otherwise.
 */
function fusionDown(j) {
    var hasFused = false;
    for (let i = 3; i >= 1; i--) {
        if ((getCell(i, j).innerHTML == getCell(i - 1, j).innerHTML) && (getCell(i, j).innerHTML != "*")) {
            hasFused = true;
            STATE.Score += Number(getCell(i, j).innerHTML * 2);
            setValue(i, j, getCell(i, j).innerHTML * 2);
            setValue(i - 1, j, "*");
        }
    }
    return hasFused;
}

/** 
 * Moves numbers in the specified column down.
 * @param {number} j - The index of the column.
 * @return {boolean} True if any numbers in the column have been moved, false otherwise.
 */
function moveDown(j) {
    var hasMoved = false;
    for (let i = 3; i >= 0; i--) {
        if (getCell(i, j).innerHTML == "*") {
            for (let k = i - 1; k >= 0; k--) {
                if (getCell(k, j).innerHTML != "*") {
                    hasMoved = true;
                    setValue(i, j, getCell(k, j).innerHTML);
                    setValue(k, j, "*");
                    break;
                }
            }
        }
    }
    return hasMoved;
}

/** 
 * Moves all numbers in the specified column down.
 * If the game board has changed, it updates the game board.
 * @see {@link downAll}
 * @see {@link update}
 * @returns {void}
 */
export function bas() {
    /* console.log("bas"); */
    if (downAll()) { update(); }
    else { console.log("Pas de mouvement ni de fusion possible"); GameOver(); }
}

/** 
 * Moves all numbers in the specified column up.
 * If the game board has changed, it updates the game board.
 * @see {@link upAll}
 */
export function haut() {
    /* console.log("haut"); */
    if (upAll()) { update(); }
    else { console.log("Pas de mouvement ni de fusion possible"); GameOver(); }
}

/**
 * Moves all numbers in the specified column up.
 * @param {number} j - The index of the column.
 * @see {@link moveUp}
 * @see {@link fusionUp}
 * @return {boolean} True if the column has changed as a result of the move, false otherwise.
 */
function up(j) {
    var hasChanged = moveUp(j) + fusionUp(j) + moveUp(j);
    if (hasChanged != 0) { hasChanged = true; }
    return hasChanged;
}

/**
 * Moves all numbers in all columns up.
 * @return {boolean} True if any column has changed as a result of the move, false otherwise.
 * @see {@link up}
 */
export function upAll() {
    var hasChanged = false;
    for (let j = 0; j < 4; j++) {
        hasChanged += up(j);
    }
    if (hasChanged != 0) { hasChanged = true; }
    return hasChanged;
}

/**
 * Fuses numbers in the specified column up.
 * Increases the score if two cells are fused by the value of the fused cell.
 * @param {number} j - The index of the column.
 * @return {boolean} True if any numbers in the column have been fused, false otherwise.
 */
function fusionUp(j) {
    var hasFused = false;
    for (let i = 0; i <= 2; i++) {
        if ((getCell(i, j).innerHTML == getCell(i + 1, j).innerHTML) && (getCell(i, j).innerHTML != "*")) {
            hasFused = true;
            STATE.Score += Number(getCell(i, j).innerHTML * 2);
            setValue(i, j, getCell(i, j).innerHTML * 2);
            setValue(i + 1, j, "*");
        }
    }
    return hasFused;
}

/**
 * Moves numbers in the specified column up.
 * @param {number} j - The index of the column.
 * @return {boolean} True if any numbers in the column have been moved, false otherwise.
 */
function moveUp(j) {
    var hasMoved = false;
    for (let i = 0; i <= 3; i++) {
        if (getCell(i, j).innerHTML == "*") {
            for (let k = i + 1; k <= 3; k++) {
                hasMoved = true;
                if (getCell(k, j).innerHTML != "*") {
                    setValue(i, j, getCell(k, j).innerHTML);
                    setValue(k, j, "*");
                    break;
                }
            }
        }
    }
    return hasMoved;
}