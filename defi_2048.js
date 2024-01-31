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
function keytester(event){
    if (event.key == "ArrowUp"){
        haut()
    }
}