function aleatorio() {
    var dou=Math.floor(Math.random() * 3)
    if (dou==0){
       opcionpc="Piedra";
       }else if (dou==1){
               opcionpc="Papel";
           } else{
                  opcionpc="Tijera";
              }

console.log("La computadora eligio: "+opcionpc);
}
function batalla() {
    if ((opcion=="Piedra" && opcionpc=="Tijera" )||(opcion=="Papel" && opcionpc=="Piedra")||(opcion=="Tijera" && opcionpc=="Papel")){
        console.log("Gana el jugador!");
    }
        else if(opcion==opcionpc){
                console.log("Empatan!");
        }
        else{console.log("El jugador pierde!")}

} 
function batallaconswitch() {
    switch (true){
        case (opcion=="Piedra" && opcionpc=="Tijera" )||(opcion=="Papel" && opcionpc=="Piedra")||(opcion=="Tijera" && opcionpc=="Papel"):
            console.log("Gana el jugador!");
            break;
        case opcion==opcionpc:
            console.log("Empatan!");
            break;
        default:
            console.log("El jugador pierde!");
            break;

    }
}
var opcion="Piedra"
aleatorio();
batallaconswitch();