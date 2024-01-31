testbonjour();
var x = 0;


window.onload = (event) => {
    console.log('page is fully loaded');
    // testGetTable ();
    // testGetCell();
    // testgetValeurCell();
    // testsetValeurCell();
    // testshowRow();
    testshowCol();

};

document.addEventListener('keyup', (event) => {
    keytester(event);
});
function bonjour() {
    console.log("Bonjour")
}
function testbonjour() {
    bonjour()
}
function haut() {
    console.log("haut")
}
function bas() {
    console.log("bas")
}
function gauche() {
    console.log("gauche")
}
function droite() {
    console.log("droite")
}
function keytester(event) {
    if (event.key == "ArrowUp") {
        haut()
        x = x + 1;
    }
    if (event.key == "ArrowDown") {
        bas()
        x = x + 1;
    }
    if (event.key == "ArrowLeft") {
        gauche()
        x = x + 1;
    }
    if (event.key == "ArrowRight") {
        droite()
        x = x + 1;
    }
    if (event.key == "t") {
        changeTitre("Nouveau titre")
    }
    if (event.key == "s") {

        score()
    }
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

function getValeurCell(i, j) {
    return parseInt(getCell(i, j).innerHTML);
}
function testgetValeurCell() {
    console.log(getValeurCell(0, 0));
    console.log(getValeurCell(1, 1));
    console.log(getValeurCell(2, 2));
    console.log(getValeurCell(3, 3));
}
function setValeurCell(i, j, valeur) {
    getCell(i, j).innerHTML = valeur;
}
function testsetValeurCell() {
    setValeurCell(0, 0, 1);
    setValeurCell(1, 1, 2);
    setValeurCell(2, 2, 3);
    setValeurCell(3, 3, 4);
}
function showRow(i) {
    valeur = "";
    for (j = 0; j < 4; j++) {
        valeur += getCell(i, j).innerHTML + " ";
    }
    console.log(valeur);

}
function testshowRow() {
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
function testshowCol() {
    showCol(0);
    showCol(1);
    showCol(2);
    showCol(3);
}