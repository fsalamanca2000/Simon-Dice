class Persona{
  constructor(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
    saludar(fn) {
      console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
      if(fn){
        fn(this.nombre, this.apellido)
      }
    }
    esAltoOBajo(){
      return this.altura > 1.80
    }
}
class Desarrollador extends Persona{
  constructor(nombre, apellido,altura){
    super(nombre, apellido, altura)
  }
  saludar(fn){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    if(fn){
      fn(this.nombre, this.apellido, true)
    }
  }
}
function responderSaludo(nombre, apellido, esDev){
  console.log(`Buen dia ${nombre} ${apellido}`)
  if(esDev){
    console.log(`Ah mirá no sabia que sos un desarrollador/a`)
  }
}

var felipe = new Desarrollador('Felipe', 'Salamanca', 1.74)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Desarrollador('Arturo','Martinez', 1.85) 

felipe.saludar(responderSaludo)
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)