var Score = 0;
var Game_State = [];
var has_already_won = false;  


window.onload = (event) => {
    console.log('page is fully loaded');
    if (getCookie('game_state') == null) {
        Game_State =[["*", "*", "*", "*"],
                     ["*", "*", "*", "*"],
                     ["*", "*", "*", "*"],
                     ["*", "*", "*", "*"],
                     ["0"]];
        newGame();
    }
    else {
        Game_State = getCookie('game_state');
        /* console.log(typeof Game_State);
        console.log(Game_State.slice(0, 4)); */
        set_Board(Game_State.slice(0, 4));
        score.innerHTML = Game_State[4][0];
        document.getElementById("best-score").innerHTML = Number(Game_State[4][1]);
        colorCells();
    }
    document.addEventListener('keyup', (event) => {
        keytester(event);
    });
    document.getElementById('new-game-button').addEventListener('click', function() {
        document.getElementById('game-over-overlay').classList.add('hidden');
      });
      document.getElementById('game-over-overlay').classList.add('hidden');
};



function keytester(event) {
    if (event.key == "ArrowUp") { haut(); }
    if (event.key == "ArrowDown") { bas(); }
    if (event.key == "ArrowLeft") { gauche(); }
    if (event.key == "ArrowRight") { droite(); }
    if (event.key == "t") { changeTitre("Nouveau titre"); }
    if (event.key == "s") { score(); }
    if (event.key == "i") { testInit(); }
    if (event.key == "a") { testGetRandomInt(); }
    if (event.key == "r") { 
    Game_State = getCookie('game_state');
    console.log(game_state); }
    if (event.key == "n") { newGame(); }
    if (event.key == "e") { testisEmpty(); }
    if (event.key == "c") { save_Game_State(); }
}
function save_Game_State() {
    var valeur = [];
    for (let i = 0; i < 4; i++) {
        valeur.push(showRow(i).split(','));
    }
    valeur.push([Score,Number(document.getElementById("best-score").innerHTML)]);
    document.cookie = "game_state = " + JSON.stringify(valeur);
    var cookieValue = document.cookie;
    console.log(cookieValue);
}

function getCookie(name) {
    let cookieArray = document.cookie.split('; ');

    for(let i = 0; i < cookieArray.length; i++) {
        let cookiePair = cookieArray[i].split('=');

        if(name == cookiePair[0]) {
            return JSON.parse(cookiePair[1]);
        }
    }

    return null;
}

function showRow(i) {
    valeur = "";
    for (j = 0; j < 4; j++) {
        valeur += getCell(i, j).innerHTML + ",";
    }
    valeur = valeur.slice(0, -1); // Remove the last character
/*     console.log(valeur);
 */    return valeur;
}

function showCol(j) {
    valeur = "";
    for (i = 0; i < 4; i++) {
        valeur += getCell(i, j).innerHTML + " ";
    }

/*     console.log(valeur);
 */}

function setRow(i, a, b, c, d) {
    valeur = [a, b, c, d];
    for (j = 0; j < 4; j++) {
        setValue(i, j, valeur[j]);
    }
}

function setCol(j, a, b, c, d) {
    valeur = [a, b, c, d];
    for (i = 0; i < 4; i++) {
        setValue(i, j, valeur[i]);
    }
}














function hasEmpty() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j <= 3; j++) {
            if (isEmpty(i, j)) {
                return true;
            }
        }
    }
    return false;
}


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

//#region Left
function gauche() {
    /* console.log("gauche"); */
    if (leftAll()) { update(); }
    else { console.log("Pas de mouvement ni de fusion possible"); GameOver(); }
}
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








function fusionLeft(i) {
    var hasFused = false;
    for (let j = 0; j <= 2; j++) {
        if ((getCell(i, j).innerHTML == getCell(i, j + 1).innerHTML) && (getCell(i, j).innerHTML != "*")) {
            hasFused = true;
            Score += Number(getCell(i, j).innerHTML * 2);
            setValue(i, j, getCell(i, j).innerHTML * 2);
            setValue(i, j + 1, "*");
        }
    }
    return hasFused;
}








function left(i) {
    var hasChanged = moveLeft(i) + fusionLeft(i) + moveLeft(i);
    if (hasChanged != 0) { hasChanged = true; }
    return hasChanged;
}
function leftAll() {
    var hasChanged = false;
    for (let i = 0; i < 4; i++) {
        hasChanged += left(i);
    }
    if (hasChanged != 0) { hasChanged = true; }
    return hasChanged;
}
//#endregion

//#region Right
function right(i) {
    var hasChanged = moveRight(i) + fusionRight(i) + moveRight(i);
    if (hasChanged != 0) { hasChanged = true; }
    return hasChanged;
}
function rightAll() {
    var hasChanged = false;
    for (let i = 0; i < 4; i++) {
        hasChanged += right(i);

    }
    if (hasChanged != 0) { hasChanged = true; }
    return hasChanged;
}

function fusionRight(i) {
    var hasFused = false;
    for (let j = 3; j >= 1; j--) {
        if ((getCell(i, j).innerHTML == getCell(i, j - 1).innerHTML) && (getCell(i, j).innerHTML != "*")) {
            hasFused = true;
            Score += Number(getCell(i, j).innerHTML * 2);
            setValue(i, j, getCell(i, j).innerHTML * 2);
            setValue(i, j - 1, "*");
        }
    }
    return hasFused;
}
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
function droite() {
    /* console.log("droite"); */
    if (rightAll()) { update(); }
    else { console.log("Pas de mouvement ni de fusion possible"); GameOver(); }
}
//#endregion

//#region Down
function down(j) {
    var hasChanged = moveDown(j) + fusionDown(j) + moveDown(j);
    if (hasChanged != 0) { hasChanged = true; }
    return hasChanged;
}
function downAll() {
    var hasChanged = false;
    for (let j = 0; j < 4; j++) {
        hasChanged += down(j);
    }
    if (hasChanged != 0) { hasChanged = true; }
    return hasChanged;
}

function fusionDown(j) {
    var hasFused = false;
    for (let i = 3; i >= 1; i--) {
        if ((getCell(i, j).innerHTML == getCell(i - 1, j).innerHTML) && (getCell(i, j).innerHTML != "*")) {
            hasFused = true;
            Score += Number(getCell(i, j).innerHTML * 2);
            setValue(i, j, getCell(i, j).innerHTML * 2);
            setValue(i - 1, j, "*");
        }
    }
    return hasFused;
}

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
function bas() {
    /* console.log("bas"); */
    if (downAll()) { update(); }
    else { console.log("Pas de mouvement ni de fusion possible"); GameOver(); }
}
//#endregion

//#region Up
function haut() {
    /* console.log("haut"); */
    if (upAll()) { update(); }
    else { console.log("Pas de mouvement ni de fusion possible"); GameOver(); }
}

function up(j) {
    var hasChanged = moveUp(j) + fusionUp(j) + moveUp(j);
    if (hasChanged != 0) { hasChanged = true; }
    return hasChanged;
}
function upAll() {
    var hasChanged = false;
    for (let j = 0; j < 4; j++) {
        hasChanged += up(j);
    }
    if (hasChanged != 0) { hasChanged = true; }
    return hasChanged;
}

function fusionUp(j) {
    var hasFused = false;
    for (let i = 0; i <= 2; i++) {
        if ((getCell(i, j).innerHTML == getCell(i + 1, j).innerHTML) && (getCell(i, j).innerHTML != "*")) {
            hasFused = true;
            Score += Number(getCell(i, j).innerHTML * 2);
            setValue(i, j, getCell(i, j).innerHTML * 2);
            setValue(i + 1, j, "*");
        }
    }
    return hasFused;
}

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
//#endregion

//#region Game-Logic
function score() {
    /* console.log("score : ", Score) */
    scoretext = document.getElementById("score");
    best_scoretext = document.getElementById("best-score");
    scoretext.innerHTML = Score;
    if (Score > best_scoretext.innerHTML) {
        best_scoretext.innerHTML = Score;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandom2or4(percent) {
    if (getRandomInt(0, 100) < percent) {
        return 2;
    }
    else {
        return 4;
    }
}

function newGame() {
    Score = 0;
    has_already_won = false;
    score();
    set_Board();
    flag = true;
    while (flag) {
        valeur = []
        for (let i = 0; i < 4; i++) {
            valeur.push(getRandomInt(0, 3));
        }
        if (valeur[0] != valeur[2] || valeur[1] != valeur[3]) { // On test si c'est pas les meme case
            setValue(valeur[0], valeur[1], getRandom2or4(85));
            setValue(valeur[2], valeur[3], getRandom2or4(85));
            flag = false;
        }
    }
    colorCells();
}

function newNumber() {
    var coord = getEmpty();
    random = getRandom2or4(85);
    setValue(coord[0], coord[1], random);
}


function isEmpty(i, j) {
    if (getCell(i, j).innerHTML == "*") {
        return true;
    }
    else {
        return false;
    }
}


function set_Board(Board= null) {
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


//#endregion

//#region Low-Level
function changeTitre(Nouveau_titre) {
    title = document.getElementById("titre");
    title.innerHTML = Nouveau_titre;
    console.log(title)
}

function getTable() {
    table = document.getElementById("table");
    return table;

}

function getCell(i, j) {
    table = getTable();
    return table.rows[i].cells[j];
}

function getValeur(i, j) {
    return parseInt(getCell(i, j).innerHTML);
}

function setValue(i, j, valeur) {
    getCell(i, j).innerHTML = valeur;
}
//#endregion

//#region testing

function testGetTable() {
    console.log(getTable());
}

function testGetCell() {
    console.log(parseInt(getCell(0, 0).innerHTML) + 1);
    console.log(parseInt(getCell(1, 2).innerHTML) + 1);
    console.log(parseInt(getCell(2, 0).innerHTML) + 1);
}


function testgetValeur() {
    console.log(getValeur(0, 0));
    console.log(getValeur(1, 1));
    console.log(getValeur(2, 2));
    console.log(getValeur(3, 3));
}

function testsetValue() {
    setValue(0, 0, 1);
    setValue(1, 1, 2);
    setValue(2, 2, 3);
    setValue(3, 3, 4);
}

function testGetRandomInt() {
    setValue(getRandomInt(0, 3), getRandomInt(0, 3), "@");
    setValue(getRandomInt(0, 3), getRandomInt(0, 3), "@");
}

function testGetRandom2or4() {
    for (let i = 0; i < 100; i++) {
        console.log(getRandom2or4(80));
    }
}

function testInit() { set_Board(); }

function testShowCol() {
    showCol(0);
    showCol(1);
    showCol(2);
    showCol(3);
}
function testShowRow() {
    showRow(0);
    showRow(1);
    showRow(2);
    showRow(3);
}

function testSetRow() {
    setRow(0, 1, 2, 3, 4);
    setRow(1, 5, 6, 7, 8);
    setRow(2, 9, 10, 11, 12);
    setRow(3, 13, 14, 15, 16);
}

function testMoveRight() {
    setRow(0, "*", "*", "2", "*");
    setRow(1, "4", "*", "2", "*");
    setRow(2, "2", "*", "2", "2");
    setRow(3, "4", "2", "*", "4");
    for (let i = 0; i < 4; i++) {
        moveRight(i);
    }
}

function testMoveLeft() {
    setRow(0, "*", "*", "2", "*");
    setRow(1, "4", "*", "2", "*");
    setRow(2, "2", "*", "2", "2");
    setRow(3, "4", "2", "*", "4");
    for (let i = 0; i < 4; i++) {
        moveLeft(i);
    }
}

function testMoveUp() {
    setCol(0, "*", "*", "2", "*");
    setCol(1, "4", "*", "2", "*");
    setCol(2, "2", "*", "2", "2");
    setCol(3, "4", "2", "*", "4");
    for (let j = 0; j < 4; j++) {
        moveUp(j);
    }
}

function testMoveDown() {
    setCol(0, "*", "*", "2", "*");
    setCol(1, "4", "*", "2", "*");
    setCol(2, "2", "*", "2", "2");
    setCol(3, "4", "2", "*", "4");
    for (let j = 0; j < 4; j++) {
        moveDown(j);
    }
}

function testFusionRight() {
    setRow(0, "*", "*", "2", "2");
    setRow(1, "4", "4", "2", "2");
    setRow(2, "*", "2", "2", "2");
    setRow(3, "*", "2", "2", "4");
    for (let i = 0; i < 4; i++) {
        fusionRight(i);
    }
}

function testFusionLeft() {
    setRow(0, "*", "*", "2", "2");
    setRow(1, "4", "4", "2", "2");
    setRow(2, "*", "2", "2", "2");
    setRow(3, "*", "2", "2", "4");
    for (let i = 0; i < 4; i++) {
        fusionLeft(i);
    }
}

function testFusionUp() {
    setCol(0, "*", "*", "2", "2");
    setCol(1, "4", "4", "2", "2");
    setCol(2, "*", "2", "2", "2");
    setCol(3, "*", "2", "2", "4");
    for (let j = 0; j < 4; j++) {
        fusionUp(j);
    }
}

function testFusionDown() {
    setCol(0, "*", "*", "2", "2");
    setCol(1, "4", "4", "2", "2");
    setCol(2, "*", "2", "2", "2");
    setCol(3, "*", "2", "2", "4");
    for (let j = 0; j < 4; j++) {
        fusionDown(j);
    }
}

function testRightAll() {
    setRow(0, "*", "*", "2", "*");
    setRow(1, "2", "*", "2", "*");
    setRow(2, "2", "*", "2", "2");
    setRow(3, "4", "2", "*", "4");
    rightAll();
}

function testLeftAll() {
    setRow(0, "*", "*", "2", "*");
    setRow(1, "2", "*", "2", "*");
    setRow(2, "2", "*", "2", "2");
    setRow(3, "4", "2", "*", "4");
    leftAll();
}

function testUpAll() {
    setCol(0, "*", "*", "2", "*");
    setCol(1, "2", "*", "2", "*");
    setCol(2, "2", "*", "2", "2");
    setCol(3, "4", "2", "*", "4");
    upAll();
}

function testDownAll() {
    setCol(0, "*", "*", "2", "*");
    setCol(1, "2", "*", "2", "*");
    setCol(2, "2", "*", "2", "2");
    setCol(3, "4", "2", "*", "4");
    downAll();
}

function testHasEmpty() {
    setCol(0, "1", "2", "3", "4");
    setCol(1, "5", "6", "7", "8");
    setCol(2, "9", "10", "11", "12");
    setCol(3, "13", "14", "15", "16");
    console.log("isempty:", hasEmpty());
    setCol(0, "1", "2", "3", "4");
    setCol(1, "5", "6", "7", "8");
    setCol(2, "9", "10", "11", "12");
    setCol(3, "13", "14", "15", "*");
    console.log("isempty:", hasEmpty());
}

function testGetEmpty() {
    var coord = getEmpty();
    var i = coord[0];
    var j = coord[1];
    console.log(i, j);
}

function testisEmpty() {
    set_Board();
    newGame();
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            if (isEmpty(i, j)) {
                console.log("la case [" + i + "][" + j + "] est vide");
            }
        }
    }

}

function GameOver() {
    if (!has_already_won) {
        for (let i = 0; i <= 3; i++) {
            for (let j = 0; j <= 3; j++) {
                if (getCell(i, j).innerHTML == "2048") {
                    console.log("Vous avez gagné");
                    has_already_won = true;
                }
            }
        }
    }
    if (!hasEmpty()) {
        save_Game_State();
        if (!leftAll()){
            if (!rightAll()){
                if (!upAll()){
                    if (!downAll()){
                        console.log("Game Over");
                        document.getElementById('game-over-overlay').classList.remove('hidden');
                        /* document.getElementById('game-over-overlay').classList.remove('hidden'); */
                    }
                }
            }
            }
        set_Board(Game_State.slice(0, 4));
    }
}

function colorCells() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        let cell = getCell(i, j);
        let value = cell.innerHTML;
        cell.className = 'cell-' + value;
        if (value >= 2048) {
            cell.className = 'cell-2048';
        }
      }
    }
  }

function update() {
    newNumber();
    save_Game_State();
    GameOver();
    colorCells();
    score();
  }
//#endregion 