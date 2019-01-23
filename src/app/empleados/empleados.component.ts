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
  public color:string;
  public color_select:string;

  constructor() {
    this.empleado = new Empleado('empleado juan',25,'master',false);

    this.trabajadores = [
      new Empleado('juan',55,'administrator',true),
      new Empleado('trabajador pablo',85,'master',true),
      new Empleado('leon',25,'dev',false)
    ];

    this.trabajador_ext = false;
    this.color = "green";
    this.color_select = "red";
  }

  ngOnInit() {
    console.log(this.trabajadores);
    console.log(this.empleado);
  }

  cambiarExterno(valor){
    this.trabajador_ext = valor;
  }

}
