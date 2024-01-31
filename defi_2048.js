testbonjour();

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
    }
    if (event.key == "ArrowDown"){
        bas()
    }
    if (event.key == "ArrowLeft"){
        gauche()
    }
    if (event.key == "ArrowRight"){
        droite()
    }
    if (event.key == "t" ){
        changeTitre("Nouveau titre")
    }
}
function changeTitre(Nouveau_titre){
    title= document.getElementsByTagName("h1");
    title[0].innerHTML = Nouveau_titre;
}