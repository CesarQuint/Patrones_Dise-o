//*Es un patron de diseño tipo estructura ,como se estructuran las clases
//*Ayudan a agregar funciones jerarquicas

class ProductComponent{
    constructor(name){
        this.name=name
    }
    getDetail(){
        return `${this.name}`
    }
}
//*Decorator
class ProductDecorator{
    constructor(productComponent){
        this.productComponent=productComponent
    }

    getDetail(){
        return this.productComponent.getDetail();
    }
}

class ComercialInfoProductDecorator extends ProductDecorator{
    constructor(productComponent,tradename,brand){
        super(productComponent)
        this.tradename=tradename
        this.brand=brand
    }
    
    getDetail(){
        return `${this.tradename} ${this.brand}`+super.getDetail()
    }
}
class StoreProduct extends ProductDecorator{
    constructor(productComponent,price){
        super(productComponent)
        this.price=price
    }
    
    getDetail(){
        return `$${this.price} `+super.getDetail()
    }
}

class HTMLProductDecorator extends ProductDecorator{
    getDetail(){
        return `<h1>Informacion del producto</h1>
        <p>${super.getDetail()}</p>
        `
    }
}
//Ejecucion
//Component
const productComponent = new ProductComponent("Cerveza")
console.log(productComponent.getDetail());

//!Decorato in action 
const comercialInfoProduct=new ComercialInfoProductDecorator(productComponent,"London","Fuller S")

const storeProduct= new StoreProduct(productComponent,1.15)


const product= new StoreProduct(comercialInfoProduct,1.15)

console.log(storeProduct.getDetail());

console.log(comercialInfoProduct.getDetail());

console.log(product.getDetail());

//*Desde mi punto de vista es una herencia multidireccional ya que pueden usarse las diversas clases para su polimorfismo

//*Decorador 3

const htmlProduct=new HTMLProductDecorator(product)
myDiv.innerHTML=htmlProduct.getDetail()