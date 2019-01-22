import { Component, OnInit } from '@angular/core';
import {Empleado} from "./empleado";

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  public empleado:Empleado;
  public trabajadores:Array<any>;
  public trabajador_ext:boolean;


  constructor() {
    this.empleado = new Empleado('empleado juan',25,'master',false);

    this.trabajadores = [
      new Empleado('juan',55,'administrator',true),
      new Empleado('trabajador pablo',85,'master',true),
      new Empleado('leon',25,'dev',false)
    ];

    this.trabajador_ext = false;
  }

  ngOnInit() {
    console.log(this.trabajadores);
    console.log(this.empleado);
  }

  cambiarExterno(valor){
    this.trabajador_ext = valor;
  }

}
