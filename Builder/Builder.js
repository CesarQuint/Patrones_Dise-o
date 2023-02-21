//*Separar el constructor para la creacion de un objeto Complejo

class Person{
    constructor(name,lastName,age,country,city,hobbies){
        this.name=name;
        this.lastName=lastName
        this.age=age
        this.country=country
        this.city=city
        this.hobbies=hobbies
    } 

    getFullName(){
        return this.name+""+this.lastName
    }
}

class PersonBuilder{
    constructor(){
        this.reset()
    }
    reset(){
        this.name=""
        this.lastName=""
        this.age=0
        this.country=""
        this.city=""
        this.hobbies=[]
    }
    setName(name){
        this.name=name
        return this
    }
    setlastName(lastName){
        this.lastName=lastName
        return this
    }
    setAge(age){
        this.age=age
        return this
    }
    setCountry(country){
        this.country=this.country
        return this
    }
    setCity(city){
        this.city=this.city
        return this
    }
    addHobby(hobby){
        this.hobbies.push(hobby)
        return this
    }

    build(){
        const person =new Person(
            this.name,
            this.lastName,
            this.age,
            this.country,
            this.city,
            this.hobbies
        )
        this.reset()
        return person
    }
}

const builder =new PersonBuilder()
const cesar=builder.setName("Cesar").setlastName("Quintero").addHobby("Jugar").addHobby("Leer").build()
console.log(cesar);