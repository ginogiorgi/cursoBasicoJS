var Marca=["Peugeot", "Toyota", "Fiat", "Ford"];
var Anio=["2023","2022","2021","2020"];
var Modelo={
    Peugeot:["208","207", "307","206"],
    Toyota:["Corolla", "Etios", "Yaris", "Hilux"],
    Fiat:["Pulse", "Palio", "Toro", "Uno"],
    Ford:["Onix", "Ranger", "Mustang", "Focus"],
}
function getModelo(marca){
    var inerMarca=Modelo[marca];
        return inerMarca[aleatorio()];
    }
function aleatorio() {
    var i=Math.floor(Math.random() * 4);
    return i;
}
function Auto(marca, modelo, anio){
    this.marca=Marca[aleatorio()];
    this.modelo=getModelo(this.marca);
    this.anio=Anio[aleatorio()]; 
}
for(var u=0; u < 30; u++){
    var nuevoAuto = new Auto(Marca, Modelo, Anio);
    console.log(nuevoAuto);
}
