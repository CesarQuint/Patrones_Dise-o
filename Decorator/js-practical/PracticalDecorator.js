class ClientComponent{
    constructor(url){
        this.url=url
    }
    async getData(){
        const res= await fetch(this.url)
        const data=await res.json()
        return data
    }
}
//*Decorador
class ClientDecoraton{
    constructor(clientComponent){
        this.clientComponent=clientComponent
    }
    async getData(){
        return await this.clientComponent.getData()
    }
}

//!Decorador 1
class UpperCaseClientDecoraator extends ClientDecoraton{
    async getData(){
        const data=await super.getData()
        const newData =data.map(el=>{
            return {
                ...el, // copia del elemento con spread operation
                title: el.title.toUpperCase(), // modificando la propiedad
            };
        })
        return newData
    }
}

//!Decorador 2
class HTMLClientDecorator extends ClientDecoraton{
    async getData(){
        const data =await super.getData()
        const newData =data.map(el=>{
            el.title=`<h1>${el.title}</h1>`
            el.thumbnailUrl=`<img src='${el.thumbnailUrl}'>`
            return el
        })
        return newData
    }
}

(async()=>{
    const url="https://jsonplaceholder.typicode.com/photos"
    const client=new ClientComponent(url)
    const data =await client.getData()
    
    const upperClient= new UpperCaseClientDecoraator(client)
    const data2=await upperClient.getData()
    console.log(data2);

    const htmlClient=new HTMLClientDecorator(upperClient)
    const data3 =await htmlClient.getData()
    divContent1.innerHTML=data3.reduce((ac,e)=>{
        return ac+e.title +e.thumbnailUrl
    },"")
    
})();
