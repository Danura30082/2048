testbonjour();
var x = 0;
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