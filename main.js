
let rangoEdadTalla = "";

//CALCULO RANGO ETARIO
function rangoEtario () {  

//pedimos nombre del paciente
let nombreMascota = (prompt ("Ingrese el nombre de su perro"));

//pedimos ingreso de edad 
let edad = parseInt(prompt("Ingrese la edad de su mascota:"));

//pedimos categoria de raza 
let categoriaRaza = prompt("Ingrese la categoria a la que pertenece su mascota segun su talla: grande - mediana - chica");
while (categoriaRaza !== 'grande' && categoriaRaza !=='mediana' && categoriaRaza !== 'chica') {  categoriaRaza = prompt("Ingrese la categoria a la que pertenece su mascota segun su talla: grande - mediana - chica");}
 
//mostramos que rango estario pertenece
 if((edad >= 15 && categoriaRaza === "chica") || (edad >= 12 && categoriaRaza ==="mediana") || (edad >= 8 && categoriaRaza ==="grande") ) 
         { rangoEdadTalla = "geronte"} 
else if ((edad <= 1 && categoriaRaza === "chica") || (edad <=2 && categoriaRaza ==="mediana") || (edad <= 3 && categoriaRaza ==="grande")) {rangoEdadTalla= "cachorro"}
else {rangoEdadTalla= "adulto"}; 

//Mostramos en pantalla el Nombre del paciente y rango etario 
alert (nombreMascota + ' es un perro ' + rangoEdadTalla);
};

//llamamos a la funcion para que se ejecute
rangoEtario ();

//Caluculo de la Fluidoterapia 

let peso = parseFloat (prompt("Ingrese el peso de su mascota"));

function fluidoterapia () { 

const fluido = 10; //10 ml/kg/h

const macrogotero= 20; //20 gotas x ml

const segundosHora= 60; //segundos

let calculoFluido= (macrogotero*((peso * fluido)/segundosHora)); 

console.log (calculoFluido.toFixed(2));
}
//llamamos a la funcion para que se ejecute
fluidoterapia ()

//Calculo de dosis de fentanilo en bolo 

let dosisG = 5 //mcg/kg/h dosis geronte
let dosisA = 10 // mcg/kg/h dosis adulto

let concentracion = 50 //mcg/ml

//calculamos la dosis en relacion al peso del paciente y rango etario

function calculoDosis () { 
if (rangoEdadTalla === "geronte"){
let calculoFenta= ((peso*dosisG)/concentracion);
console.log (calculoFenta.toFixed(2));
}  else if (rangoEdadTalla === "adulto") { 
let calculoFenta= ((peso*dosisA)/concentracion);
console.log (calculoFenta.toFixed(2))} 
else {console.log ("es cachorro mejor no usar fentanilo")};
 }
//llamamos a la funcion para que se ejecute
 calculoDosis ();
