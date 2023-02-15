//*Primera Clase Paradigma funcional

//!Funcion de primer orden es: TODA FUNCION QUE PUEDA SER TRATADA COMO UNA VARIABLE .Esta puede ser guardada ,ejecuar o ser mandanda

function sum(a,b){
    return a+b
}
let res=sum(1,2)
console.log(res);

const fSum= sum;
res=fSum(10,2)
console.log(res);

//!Funcion de Orden Superior es toda aquella que puede recivir parametros como funciones  .En el ejemplo inferior fn es el nombre del parametro mas no de la funcion en si 

function operation(fn,a,b){
    console.log("se hace algo");
    console.log(fn(a,b))
}

operation(sum,10,20);

//*2da Arrow Functions

//! Es una forma de expresion de una funcion anonima (Funcion que no tiene nombre y puede ser almacenada en una variable)

let fA=function(){
    console.log("Anonima");
}
fA()

//!El return queda implicito
let fAa=()=>console.log("Arrow");

fA()
fAa()

//*arrow function aplicada a la funcion Operation que se encuentra arriba
operation((a,b)=>a*b,5,5)

//*3ra metodo forEach de arrays ,mutabilidad e inmutabilidad

//*forEach 

const names=['Pp','Hecto','Cesar'];
names.forEach(name=>{console.log(name);})

//!Mutable -Afecta al Array original 
//!Inmutable -No afecta al Array original 

//!Array.sort() es mutable y ordena alfabeticamente

//*4ta metodo Map regresa un nuevo array con valores modificados

const namesUpper =names.map(name=>name.toUpperCase())
console.log(namesUpper);

//*5ta metodo Reduce

const numbers =[5,4,7,1,10]
//! La estructura de la funcion es Array.reduce(funcion,valor inicial)
//! La diferencia con la funcion inferior es que esta es anonima tipo arrow Function

const total=numbers.reduce((ac,number)=>{
    return ac+ number
},0)

//* Podriamos sinplificar de la siguiente manera const total= numbers.reduce((ac,number)=>ac+ number,0)

console.log(total);

//*6ta clases y Objetos
//clase
class Drink{
    constructor(name){
        this.name=name
    }
    info(){
        return "la bebida es:"+this.name
    }
}
//funcional //!TODA FUNCION ES UNA CLASE
function Drink2(name){
    this.name=name
    this.info=function(){
        return "la bebida es:"+this.name
    }
}
const drink=new Drink("Agua")
const drink2 =new Drink2("Tequila")
console.log(drink.info());
console.log(drink2.info());
