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

  constructor(
    private _ropaService : RopaService

  ) {
    this.title = "Pagina principal";


  }

  ngOnInit() {
    console.log(this._ropaService.prueba('adidas'));
  }

}
