//*Patron de diseño de comportamiento 
//*Cuando un estado cambie notificara a los observadores
//*Cada observador puede hacer una accion distinta

class Subject{

    //!Almacena las clases al ser inicializada
    constructor(){
        this.observers=[]
    }
    //!Ser agregado a las not
    subscribe(observer){
        this.observers.push(observer)
    }
    //!Ser quitado a las not
    unsuscribe(observador){
        this.observers=this.observers.filter(obs=> obs !== observador)
    }
    //!Ser Notificado con una accion
    notify(data){
        this.observers.forEach(e=>{
            e.refresh(data)
        })
    }
}

class Observer{
    constructor(fn){
        this.fn=fn
    }
    refresh(data){
        this.fn(data)
    }
}


const s=new Subject();
const o1=new Observer(d=>{
    console.log("hola soy el observador 1"+ d);
})
const o2=new Observer(d=>{
    div1.innerHTML=d
})
const o3=new Observer(d=>{
    //! el atributo split() transforma a Array
    //! el metodo reverse da vuelta al arrego
    //! el metodo join concatena Todos los aspetos
    div2.innerHTML=d.split("").reverse().join("")
})


s.subscribe(o1)
s.subscribe(o2)
s.subscribe(o3)

function change(){
    s.notify(myText.value)
}