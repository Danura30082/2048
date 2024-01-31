import { STATE } from "./state.js";
import { getCell } from "./utils.js";

/**
 * Saves the current game state in a cookie.
 * The game state is saved as a 2D array of strings.
 * The first 4 elements of the array are the rows of the game board.
 * The last element of the array is the score and the best score.
 * @returns {void}
 */
export function save_Game_State() {
    var valeur = [];
    for (let i = 0; i < 4; i++) {
        valeur.push(showRow(i).split(','));
    }
    valeur.push([STATE.Score, Number(document.getElementById("best-score").innerHTML)]);
    document.cookie = "game_state = " + JSON.stringify(valeur);
    var cookieValue = document.cookie;
    console.log(cookieValue);
}

/**
 * Gets the value of a cookie.
 * @param {string} name - The name of the cookie to get.
 * @returns {Array} The value of the cookie.
 */
export function getCookie(name) {
    let cookieArray = document.cookie.split('; ');

    for (let i = 0; i < cookieArray.length; i++) {
        let cookiePair = cookieArray[i].split('=');

        if (name == cookiePair[0]) {
            return JSON.parse(cookiePair[1]);
        }
    }

    return null;
}

/**
 * Returns a string representation of a row in the game board.
 * @param {number} i - The index of the row.
 * @returns {string} A string representation of a row in the game board separated by commas.
 */
function showRow(i) {

    let valeur = "";
    for (let j = 0; j < 4; j++) {
        valeur += getCell(i, j).innerHTML + ",";
    }
    valeur = valeur.slice(0, -1); // Remove the last character
    return valeur;
}