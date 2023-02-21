class Editor{
    constructor(implementador){
        this.implementador=implementador
    }
    print(width,height,color){
        this.implementador.setWidth(width)
        this.implementador.setHeight(height)
        this.implementador.setColor(color)
        this.implementador.print()
    }
}

class HtmlPainter{
    constructor(container){
        this.container=container
        this.width="1px"
        this.height="1px"
        this.color="#000"
    }
    setWidth(width){
        this.width=width+"px"
    }
    setHeight(height){
        this.height=height+"px"
    }
    setColor(color){
        this.color=color
    }
    print(){
        this.container.innerHTML=`
        <div style="width:${this.width};height:${this.height};background:${this.color};">
        
        </div>
        
        `
    }
}

const editor= new Editor(new HtmlPainter(content))
range.addEventListener("input",e=>{
    const width=e.target.value
    const height=e.target.value
    const color=editorColor.value
    editor.print(width,height,color)
})
editorColor.addEventListener("input",e=>{
    const width=range.value
    const height=range.value
    const color=e.target.value
    editor.print(width,height,color)
})

