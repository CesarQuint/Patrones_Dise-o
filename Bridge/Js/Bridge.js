//*Este Patron es un puente separando la clase de la implementacion

class EncoderTextAbstraction{
    constructor(encoder){
        this.encoder=encoder
    }

    encode(str){
        return this.encoder.encode(str)
    }
    decode(str){
        return this.encoder.decode(str)
    }
}

class  Base64EncoderImplementor{
    encode(str){
        return window.btoa(unescape(encodeURIComponent(str)))
    }
    decode(str){
        return decodeURIComponent(unescape(window.atob(str)))
    }
}
const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplementor())
console.log(encoder1.encode("pato"));
console.log(encoder1.decode("cGF0bw=="));