testbonjour();
var x = 0;


window.onload = (event) => {
    console.log('page is fully loaded');
    testGetTable ();
    testGetCell();
    testValeurCell();
};

document.addEventListener('keyup', (event)=> {
    keytester(event);
});
function bonjour(){
    console.log("Bonjour")
}
function testbonjour(){
    bonjour()
}
function haut(){
    console.log("haut")
}
function bas(){
    console.log("bas")
}
function gauche(){
    console.log("gauche")
}
function droite(){
    console.log("droite")
}
function keytester(event){
    if (event.key == "ArrowUp"){
        haut()
        x = x + 1;
    }
    if (event.key == "ArrowDown"){
        bas()
        x = x + 1;
    }
    if (event.key == "ArrowLeft"){
        gauche()
        x = x + 1;
    }
    if (event.key == "ArrowRight"){
        droite()
        x = x + 1;
    }
    if (event.key == "t" ){
        changeTitre("Nouveau titre")
    }
    if (event.key == "s" ){
        
        score()
    }
}
function changeTitre(Nouveau_titre){
    title= document.getElementById("titre");
    title.innerHTML = Nouveau_titre;
    console.log(title)
}
function score(){
    console.log("score : ",x)
    scoretext = document.getElementById("score");
    scoretext.innerHTML = "Score : " + x;
}
function getTable(){
    table= document.getElementById("table");
    return table;
    
}
function testGetTable ()
{
    console.log(getTable());
}
function getCell(i,j){
    table = getTable();
    return table.rows[i].cells[j];
}
function testGetCell(){
    console.log(parseInt(getCell(0,0).innerHTML)+1);
    console.log(parseInt(getCell(1,2).innerHTML)+1);
    console.log(parseInt(getCell(2,0).innerHTML)+1);
}   

function getValeurCell(i,j){
    return parseInt(getCell(i,j).innerHTML);
}
function testValeurCell(){
    console.log(getValeurCell(0,0));
    console.log(getValeurCell(1,1));
    console.log(getValeurCell(2,2));
    console.log(getValeurCell(3,3));
}