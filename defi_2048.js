testBonjour();
var Score = 0;

window.onload = (event) => {
    console.log('page is fully loaded');
    init();
    newGame();
};

document.addEventListener('keyup', (event) => {
    keytester(event);
});
function bonjour() {
    console.log("Bonjour")
}
function testBonjour() {
    bonjour()
}
function haut() {
    console.log("haut");
    if (upAll()) { 
        Score += 1;
        var coord = getEmpty();
        random = getRandom2or4(85);
        setValue(coord[0], coord[1], random);
    }
    else { console.log("Pas de mouvement ni de fusion possible") }
}
function bas() {
    console.log("bas");
    if (downAll()) { 
        Score += 1;
        var coord = getEmpty();
        random = getRandom2or4(85);
        setValue(coord[0], coord[1], random);
    }
    else { console.log("Pas de mouvement ni de fusion possible") }
}
function gauche() {
    console.log("gauche");
    if (leftAll()) { 
        Score += 1;
        var coord = getEmpty();
        random = getRandom2or4(85);
        setValue(coord[0], coord[1], random); 
    }
    else { console.log("Pas de mouvement ni de fusion possible") }
}
function droite() {
    console.log("droite");
    if (rightAll()) { 
        Score += 1;
        var coord = getEmpty();
        random = getRandom2or4(85);
        setValue(coord[0], coord[1], random);
    }
    else { console.log("Pas de mouvement ni de fusion possible") }
}

function keytester(event) {
    if (event.key == "ArrowUp") { haut(); }
    if (event.key == "ArrowDown") { bas(); }
    if (event.key == "ArrowLeft") { gauche(); }
    if (event.key == "ArrowRight") { droite(); }
    if (event.key == "t") { changeTitre("Nouveau titre"); }
    if (event.key == "s") { score(); }
    if (event.key == "i") { testInit(); }
    if (event.key == "a") { testGetRandomInt(); }
    if (event.key == "r") { testGetRandom2or4(); }
    if (event.key == "n") { newGame(); }
    if (event.key == "e") { testisEmpty(); }
}
function changeTitre(Nouveau_titre) {
    title = document.getElementById("titre");
    title.innerHTML = Nouveau_titre;
    console.log(title)
}
function score() {
    console.log("score : ", x)
    scoretext = document.getElementById("score");
    scoretext.innerHTML = "Score : " + x;
}
function getTable() {
    table = document.getElementById("table");
    return table;

}
function testGetTable() {
    console.log(getTable());
}
function getCell(i, j) {
    table = getTable();
    return table.rows[i].cells[j];
}
function testGetCell() {
    console.log(parseInt(getCell(0, 0).innerHTML) + 1);
    console.log(parseInt(getCell(1, 2).innerHTML) + 1);
    console.log(parseInt(getCell(2, 0).innerHTML) + 1);
}

function getValeur(i, j) {
    return parseInt(getCell(i, j).innerHTML);
}
function testgetValeur() {
    console.log(getValeur(0, 0));
    console.log(getValeur(1, 1));
    console.log(getValeur(2, 2));
    console.log(getValeur(3, 3));
}
function setValue(i, j, valeur) {
    getCell(i, j).innerHTML = valeur;
}
function testsetValue() {
    setValue(0, 0, 1);
    setValue(1, 1, 2);
    setValue(2, 2, 3);
    setValue(3, 3, 4);
}
function showRow(i) {
    valeur = "";
    for (j = 0; j < 4; j++) {
        valeur += getCell(i, j).innerHTML + " ";
    }
    console.log(valeur);

}
function testShowRow() {
    showRow(0);
    showRow(1);
    showRow(2);
    showRow(3);
}
function showCol(j) {
    valeur = "";
    for (i = 0; i < 4; i++) {
        valeur += getCell(i, j).innerHTML + " ";
    }
    console.log(valeur);
}
function testShowCol() {
    showCol(0);
    showCol(1);
    showCol(2);
    showCol(3);
}
function setRow(i, a, b, c, d) {
    valeur = [a, b, c, d];
    for (j = 0; j < 4; j++) {
        setValue(i, j, valeur[j]);
    }
}
function testSetRow() {
    setRow(0, 1, 2, 3, 4);
    setRow(1, 5, 6, 7, 8);
    setRow(2, 9, 10, 11, 12);
    setRow(3, 13, 14, 15, 16);
}
function init() {
    var tab = [
        ["*", "*", "*", "*"],
        ["*", "*", "*", "*"],
        ["*", "*", "*", "*"],
        ["*", "*", "*", "*"]

    ];

    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            setValue(i, j, tab[i][j]);
        }
    }
}
function testInit() { init(); }

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function testGetRandomInt() {
    setValue(getRandomInt(0, 3), getRandomInt(0, 3), "@");
    setValue(getRandomInt(0, 3), getRandomInt(0, 3), "@");
}
function getRandom2or4(percent) {
    if (getRandomInt(0, 100) < percent) {
        return 2;
    }
    else {
        return 4;
    }
}
function testGetRandom2or4() {
    for (let i = 0; i < 100; i++) {
        console.log(getRandom2or4(80));
    }
}
function newGame() {
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
}
function isEmpty(i, j) {
    if (getCell(i, j).innerHTML == "*") {
        return true;
    }
    else {
        return false;
    }
}
function testisEmpty() {
    init();
    newGame();
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            if (isEmpty(i, j)) {
                console.log("la case [" + i + "][" + j + "] est vide");
            }
        }
    }

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
function testMoveRight() {
    setRow(0, "*", "*", "2", "*");
    setRow(1, "4", "*", "2", "*");
    setRow(2, "2", "*", "2", "2");
    setRow(3, "4", "2", "*", "4");
    for (let i = 0; i < 4; i++) {
        moveRight(i);
    }
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
function testMoveLeft() {
    setRow(0, "*", "*", "2", "*");
    setRow(1, "4", "*", "2", "*");
    setRow(2, "2", "*", "2", "2");
    setRow(3, "4", "2", "*", "4");
    for (let i = 0; i < 4; i++) {
        moveLeft(i);
    }
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
function setCol(j, a, b, c, d) {
    valeur = [a, b, c, d];
    for (i = 0; i < 4; i++) {
        setValue(i, j, valeur[i]);
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
function testMoveDown() {
    setCol(0, "*", "*", "2", "*");
    setCol(1, "4", "*", "2", "*");
    setCol(2, "2", "*", "2", "2");
    setCol(3, "4", "2", "*", "4");
    for (let j = 0; j < 4; j++) {
        moveDown(j);
    }
}
function fusionRight(i) {
    var hasFused = false;
    for (let j = 3; j >= 1; j--) {
        if ((getCell(i, j).innerHTML == getCell(i, j - 1).innerHTML) && (getCell(i, j).innerHTML != "*")) {
            hasFused = true;
            setValue(i, j, getCell(i, j).innerHTML * 2);
            setValue(i, j - 1, "*");
        }
    }
    return hasFused;
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
function fusionLeft(i) {
    var hasFused = false;
    for (let j = 0; j <= 2; j++) {
        if ((getCell(i, j).innerHTML == getCell(i, j + 1).innerHTML) && (getCell(i, j).innerHTML != "*")) {
            hasFused = true;
            setValue(i, j, getCell(i, j).innerHTML * 2);
            setValue(i, j + 1, "*");
        }
    }
    return hasFused;
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

function fusionUp(j) {
    var hasFused = false;
    for (let i = 0; i <= 2; i++) {
        if ((getCell(i, j).innerHTML == getCell(i + 1, j).innerHTML) && (getCell(i, j).innerHTML != "*")) {
            hasFused = true;
            setValue(i, j, getCell(i, j).innerHTML * 2);
            setValue(i + 1, j, "*");
        }
    }
    return hasFused;
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

function fusionDown(j) {
    var hasFused = false;
    for (let i = 3; i >= 1; i--) {
        if ((getCell(i, j).innerHTML == getCell(i - 1, j).innerHTML) && (getCell(i, j).innerHTML != "*")) {
            hasFused = true;
            setValue(i, j, getCell(i, j).innerHTML * 2);
            setValue(i - 1, j, "*");
        }
    }
    return hasFused;
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
function testRightAll() {
    setRow(0, "*", "*", "2", "*");
    setRow(1, "2", "*", "2", "*");
    setRow(2, "2", "*", "2", "2");
    setRow(3, "4", "2", "*", "4");
    rightAll();
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
function testLeftAll() {
    setRow(0, "*", "*", "2", "*");
    setRow(1, "2", "*", "2", "*");
    setRow(2, "2", "*", "2", "2");
    setRow(3, "4", "2", "*", "4");
    leftAll();
}
function up(j) {
    var hasChanged = moveUp(j) + fusionUp(j) || +oveUp(j);
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
function testUpAll() {
    setCol(0, "*", "*", "2", "*");
    setCol(1, "2", "*", "2", "*");
    setCol(2, "2", "*", "2", "2");
    setCol(3, "4", "2", "*", "4");
    upAll();
}
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
function testDownAll() {
    setCol(0, "*", "*", "2", "*");
    setCol(1, "2", "*", "2", "*");
    setCol(2, "2", "*", "2", "2");
    setCol(3, "4", "2", "*", "4");
    downAll();
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
function testGetEmpty() {
    var coord = getEmpty();
    var i = coord[0];
    var j = coord[1];
    console.log(i, j);
}