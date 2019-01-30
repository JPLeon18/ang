import { Component, OnInit } from '@angular/core';
import { Coches } from "./coches";
import { PeticionesService } from "../services/peticiones.service";

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css'],
  providers: [PeticionesService]
})
export class CochesComponent implements OnInit {
  public _coche: Coches;
  public _coches: Array<Coches>;
  public Articulos;


  constructor(
    private _peticionesService:PeticionesService


  ) {
    this._coche = new Coches("","","");
    this._coches = [
      new Coches("sedan","1500","red"),
      new Coches("copupe","2500","green")
    ];
  }

  ngOnInit() {
    this._peticionesService.getarticulos().subscribe(
      result => {
        this.Articulos = result;

        if (!this.Articulos){
          console.log("error en el server");
        }
      },
      error => {
       var errorMessage = <any>error;
       console.log(errorMessage);
      }
    );


  }

  onSubmit(){
    this._coches.push(this._coche);
    this._coche = new Coches("","","");

  }


}
