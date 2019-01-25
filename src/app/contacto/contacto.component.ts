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
  public address:any;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router

  ) {
    this.title="Pagina de Contacto";
    this.address = "";
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
    this.parametro = params['page'];
    });

  }



  redirigir(){
    this._router.navigate(['/contacto', this.address]);
  }

  irHome(){
    this._router.navigate(['']);
  }
}
