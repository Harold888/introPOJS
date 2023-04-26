class Perro{
    //Atributos

    constructor(nombre, raza, peso, edad){
        this.nombre=nombre;
        this.raza=raza;
        this.edad=edad;
        this.peso=peso;
    }

    //Metodos

    ladrar(){
        console.log("guaaau")
    }

}
//Crear el objeto 
let miPerro= new Perro("Firulais", "Ciollo", 20,18);

miPerro.ladrar();