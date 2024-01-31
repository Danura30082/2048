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
