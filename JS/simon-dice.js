class Persona{
  constructor(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
    saludar() {
      console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    esAltoOBajo(){
      return this.altura > 1.80
    }
}
class Desarrollador extends Persona{
  constructor(nombre, apellido,altura){
    super(nombre, apellido, altura)
  }
  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
  }
}

Desarrollador.prototype.saludar = function (){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}
/* var felipe = new Persona('Felipe', 'Salamanca', 1.74)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Persona('Arturo','Martinez', 1.85) */

