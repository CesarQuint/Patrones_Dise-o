//*Patron de tipo comportamiento basado en el estado 
class DocumentContext{
    constructor(){
        this.content=""
        this.state=new BlankState()
    }   
    setState(state){
        this.state=state
    }
    write(text){
        this.state.write(this,text)
    }
}

class BlankState{
    write(documentContext,text){
        documentContext.content=text
        documentContext.setState(new WithContentState)
    }
}

class WithContentState{
write(documentContext,text){
        documentContext.content+=" "+text
        documentContext.setState(new WithContentState)
    }
}
class AprovedState{
    write(documentContext,text){
            console.log("Documento Aprovado ya no se modifca");
        }
    } 

const doc=new DocumentContext()
console.log(doc.state);
doc.write("Pato")
console.log(doc.state);
doc.write("Verde")
console.log(doc.content);
console.log(doc.state);
doc.setState(new AprovedState())
doc.write("Verde")
console.log(doc.content);
console.log(doc.state);
