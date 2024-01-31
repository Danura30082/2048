import { getCell,newNumber,hasEmpty,set_Board } from './utils.js';
import { STATE } from './state.js';
import { save_Game_State,getCookie } from './cookie.js';
import { leftAll,rightAll,upAll,downAll } from './mouvement.js';


/**
 * Colors the cells according to their value.
 * @returns {void}
 * @see {@link getCell}
 */
export function colorCells() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let cell = getCell(i, j);
            let value = cell.innerHTML;
            cell.className = 'cell-' + value;
            if (value == "*") {
                cell.className = 'cell-star';
            }
            if (value >= 2048) {
                cell.className = 'cell-2048';
            }
        }
    }
}

/**
 * Checks if the game is won.
 * If the game is over because it is won, it creates a win screen with a button to continu.
 * @returns {void}
 */
function Victory() {
    if (!STATE.has_already_won) {
        for (let i = 0; i <= 3; i++) {
            for (let j = 0; j <= 3; j++) {
                if (getCell(i, j).innerHTML == "2048") {
                    console.log("Vous avez gagné");
                    STATE.has_already_won = true;
                    // Create win screen
                    var winScreen = document.createElement('div');
                    winScreen.className = 'win-screen';
                    winScreen.innerHTML = 'You won!';

                    // Create continue button
                    var continueButton = document.createElement('button');
                    continueButton.innerHTML = 'Continue playing';
                    continueButton.onclick = function () {
                        winScreen.remove(); // Remove win screen when continue button is clicked
                    };

                    // Append continue button to win screen
                    winScreen.appendChild(continueButton);

                    // Append win screen to game container
                    var gameContainer = document.querySelector('.game-container');
                    gameContainer.appendChild(winScreen);
                }
            }
        }
    }
}

/**
 * Checks if the game is over.
 * If the game is over becaus it is lost, it creates a game over screen.
 * @returns {void}
 */
export function GameOver() {
    if (!hasEmpty()) {
        save_Game_State();
        if (!leftAll()) {
            if (!rightAll()) {
                if (!upAll()) {
                    if (!downAll()) {
                        console.log("Game Over");
                        if (!document.querySelector('.game-over')) {
                            var gameOverScreen = document.createElement('div');
                            gameOverScreen.className = 'game-over';
                            gameOverScreen.innerHTML = 'Game Over';
                            var gameContainer = document.querySelector('.game-container');
                            gameContainer.appendChild(gameOverScreen);
                            /* document.getElementById('game-over-overlay').classList.remove('hidden'); */
                        }
                    }
                }
            }
        }
        STATE.Game_State = getCookie('game_state');
        set_Board(STATE.Game_State.slice(0, 4));
    }
}

/**
 * Updates the game board.
 * @see {@link newNumber}
 * @see {@link save_Game_State}
 * @see {@link GameOver}
 * @see {@link colorCells}
 * @see {@link score}
 * @see {@link Victory}
 * @returns {void}
 * 
 */
export function update() {
    Victory();
    newNumber();
    save_Game_State();
    GameOver();
    colorCells();
    score();
}

/**
 * Updates the score and the best score.
 * @returns {void}
 */
export function score() {
    /* console.log("score : ", Score) */
    let scoretext = document.getElementById("score");
    let best_scoretext = document.getElementById("best-score");
    scoretext.innerHTML = STATE.Score;
    if (STATE.Score > best_scoretext.innerHTML) {
        best_scoretext.innerHTML = STATE.Score;
    }
}