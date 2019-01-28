import { Component, OnInit } from '@angular/core';
import { RopaService} from "../services/ropa.service";


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [RopaService]
})
export class InicioComponent implements OnInit {
  public title:string;
  public listado_ropa: Array<string>;
  public prenda_a_guardar:string;
  public fecha;

  constructor(
    private _ropaService : RopaService

  ) {
    this.title = "Pagina principal";
    this.fecha = new Date(2018,0,8);

  }

  ngOnInit() {
    this.listado_ropa = this._ropaService.getRopa();
    console.log(this._ropaService.prueba('adidas'));
  }

  guardarPrenda(prenda){
    this._ropaService.addRopa(prenda);
    this.prenda_a_guardar = null;
  }

  deletePrenda(index){
    this._ropaService.deleteRopa(index);
  }
}
