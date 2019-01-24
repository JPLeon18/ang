import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";  // Recoger parametros

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public title:string;
  public parametro;



  constructor(
    private _route: ActivatedRoute,
    private _router: Router

  ) {
    this.title="Pagina de Contacto";

  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.parametro = params['page'];
    });

  }

}
