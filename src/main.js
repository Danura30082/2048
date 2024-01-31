//import
import {newNumber,set_Board} from './utils.js';
import {colorCells,score,update} from './ui.js';
import {STATE} from './state.js';
import {haut,bas,gauche,droite} from './mouvement.js';
import {getCookie} from './cookie.js';


/**
 * This function is called when the page is loaded.
 * It creates a new game if there is no cookie, or loads the game from the cookie.
 * It also adds an event listener for the keyup event.
 * @param {Event} event - The event that triggered the function.
 */
window.onload = (event) => {
    // If there is no cookie, we create a new game
    if (getCookie('game_state') == null) {
        STATE.Game_State = [["*", "*", "*", "*"],
        ["*", "*", "*", "*"],
        ["*", "*", "*", "*"],
        ["*", "*", "*", "*"],
        [0, 0]];
        newGame();
    }
    // If there is a cookie, we load the game from the cookie
    else {
        STATE.Game_State = getCookie('game_state');
        set_Board(STATE.Game_State.slice(0, 4));
        STATE.Score = Number(STATE.Game_State[4][0]);
        document.getElementById("best-score").innerHTML = Number(STATE.Game_State[4][1]);
        colorCells();
    }
    // Add event listener for keyup event (when a key is released)
    document.addEventListener('keyup', (event) => {
        keytester(event);
    });
    document.getElementById('new-game-button').addEventListener('click', newGame);

};

/**
 * This function is called when a key is released.
 * If the key is an arrow key, it calls the corresponding function.
 * If the key is the "r" key, it resets the game.
 * @param {KeyboardEvent} event - The event that triggered the function.
 * @returns {void}
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
 */
function keytester(event) {
    if (event.key == "ArrowUp") { haut(); }
    if (event.key == "ArrowDown") { bas(); }
    if (event.key == "ArrowLeft") { gauche(); }
    if (event.key == "ArrowRight") { droite(); }
    if (event.key == "u") {update();}
    // Reset the game completely
    if (event.key == "r") {
        newGame();
        document.getElementById("best-score").innerHTML = 0;
    }
    if (event.key == "w") {
        let Board = [[1024, 1024, 1024, 512],
        [32, 64, 128, 256],
        [16, 8, 4, 2],
        [2, 2, 2, 2]];
        set_Board(Board);
    }
    if (event.key == "l") {
        let Board = [[2, 4, 2, 4],
        [4, 2, 4, 2],
        [2, 4, 2, 4],
        [4, 2, 4, 2]];
        set_Board(Board);
    }
    
}




/**
 * Creates a new game.
 * resets the score and the game board.
 * removes the game over screen if it exists.
 * positions two random numbers on the game board.
 * @see {@link newNumber}
 * @returns {void}
 * @see {@link set_Board}
 */
function newGame() {
    STATE.Score = 0;
    STATE.has_already_won = false;
    score();
    set_Board();
    if (document.querySelector('.game-over')) {
        document.querySelector('.game-over').remove();
    }
    newNumber();
    newNumber();
    colorCells();
}

