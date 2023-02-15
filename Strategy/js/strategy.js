//*Es un patron de comportamiento 
//*Comportamiento de un objeto sin modificar

//!Context = Es el objeto central que unifica las cosas
//! Usado en campos de venta y desarrollo front end

class SaleContext{
    //*Recepcion de la Funcion
    constructor(strategy){
        this.strategy=strategy
    }
    //*Cambio de funcion
    setStrategy(strategy){
        this.strategy=strategy
    }
    //*retorno de la funcion generada en las subclases
    calculate(amount){
        return this.strategy.calculate(amount)
    }
}

class RegularSaleStrategy{
    constructor(tax){
        this.tax=tax
    }
    calculate(amount){
        return amount+(amount*this.tax)
    }
}

class DiscountSaleStrategy{
    constructor(tax,discount){
        this.tax=tax
        this.discount=discount
    }
    calculate(amount){
        return amount +(amount*this.tax)-this.discount
    }
}

class ForeignSalesStrategy{
    
    calculate(amount){
        return amount *this.getDollarPrice()
    }
    getDollarPrice(){
        return 20
    }
}

const regularSale=new RegularSaleStrategy(0.16)
const discountSale=new DiscountSaleStrategy(0.16,3)
const foreignSale = new ForeignSalesStrategy()

const sale =new SaleContext(regularSale)

console.log(sale.calculate(10))

sale.setStrategy(discountSale)

console.log(sale.calculate(10));

sale.setStrategy(foreignSale)

console.log(sale.calculate(10));

//*---------------------------------------------

//* Usos en front end y en calculos

const data=[
    {
        name:"Heineken",
        country:"USA",
        info:"aaaaaaaaaaaaaaasdasdasdasdasdaaaaaaaaaaaasd"
    },
    {
        name:"Indio",
        country:"MXN",
        info:"aaaaaaaaaaaaaaasdasdasdasdasdaaaaaaaaaaaasd"
    },
    {
        name:"CUCAPA",
        country:"COL",
        info:"aaaaaaaaaaaaaaasdasdasdasdasdaaaaaaaaaaaasd"
    }
]

class InfoContext{
    constructor(strategy,data,element){
        this.setStrategy(strategy)
        this.data=data
        this.element=element
    }
    setStrategy(strategy){
        this.strategy=strategy
    }
    show(){
        this.strategy.show(this.data,this.element)
    }
}

class ListStrategy{
    show(data,element){
        element.innerHTML=data.reduce((ac,e)=>{
            return ac+ `
            <div>
                <h2>${e.name}</h2>
                <p>${e.country}</p>
            </div>
            <hr>
        `
        },"")
    }
}

class ListStrategyInfo{
    show(data,element){
        element.innerHTML=data.reduce((ac,e)=>{
            return ac+ `
            <div>
                <h2>${e.name.toUpperCase()}</h2>
                <p>${e.country}</p>
                <p>${e.info}</p>
            </div>
            <hr>
        `
        },"")
    }
}
const strategies=[
    new ListStrategy(),
    new ListStrategyInfo()
]

const info= new InfoContext(new ListStrategy(),data,content)
info.show()

slcOptions.addEventListener("change",(event)=>{
    const op=event.target.value
    info.setStrategy(strategies[op])
    info.show()
})

//!Resumen Strategy sirve para realizar cambios en un objeto sin tener que recurrir a un swhitch largo o anidamiento 
//*Desde mi punto es como tener una plantilla a la que se le pasan operaciones
