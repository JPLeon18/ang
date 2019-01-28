import { Injectable } from "@angular/core";

@Injectable()
export class RopaService{
  public prenda:string;
  public coleccion_ropa = ['Camisa', 'pants'];
  constructor(){
    this.prenda = "pants";

  }

  prueba(name){
    return name;
  }

  addRopa(nombre_prenda:string):Array<string>{
    this.coleccion_ropa.push(nombre_prenda);
    return this.getRopa();
  }

  getRopa(){
    return this.coleccion_ropa;
  }

  deleteRopa(index){
    this.coleccion_ropa.splice(index, 1);
    return this.getRopa();
  }

}
