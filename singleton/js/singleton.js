//* Hacer que solo exista una instancia de un objeto

class Singleton{
//Evaluacion de elemento estatico
//! Elemento estatico es un elemento que le pertenece a la clase
    constructor(){
//*Si el objeto ya fue declarado una vez con la propiedad instance se verificara
        if(Singleton.instance){
            return Singleton.instance
        }
      
        Singleton.instance =this;
    }
}

const singleton = new Singleton()
const singleton2 = new Singleton()

//! Los patrones de diseño pueden ser creacionales,de estructura o de comportamiento

class WeekDays{
    daysEs=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]
    daysEn=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

    constructor(lang){
        this.lang=lang
        if(WeekDays.instance){
            return WeekDays.instance
        }
        WeekDays.instance=this;
    }
    getDays(){
        return this.lang === "es"? this.daysEs:this.daysEn
    }
}

const weekDays=new WeekDays("es")
const weekDays2=new WeekDays("en")

console.log(weekDays.getDays())
console.log(weekDays2.getDays());