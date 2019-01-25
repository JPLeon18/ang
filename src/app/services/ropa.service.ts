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

  addRopa(nombre_prenda){
    this.coleccion_ropa.push(nombre_prenda);
  }

}
