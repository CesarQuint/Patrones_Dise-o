
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
class ItemSubject extends Subject{
    constructor(){
        super()
        this.data=[]
    }
    add(item){
        this.data.push(item)
        this.notify(this.data)
    }
}

class HtmlElementObserver{
    constructor(element){
        this.element=element
    }

    refresh(data){
        this.element.innerHTML=data.reduce((ac,e)=>{
            return ac +`
            <p>
            ${e}
            </p>
            
            `
        },"")
    }
}
const items=new ItemSubject()
const ob1 = new HtmlElementObserver(div1)
const ob2 = new HtmlElementObserver(div2)

items.subscribe(ob1)
items.subscribe(ob2)

function add(){
    const name= txtName.value
    items.add(name)
}