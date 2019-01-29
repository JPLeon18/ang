import { Component, OnInit } from '@angular/core';
import { Coches } from "./coches";

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {
  public _coche: Coches;
  public _coches: Array<Coches>;

  constructor() {
    this._coche = new Coches("","","");
    this._coches = [
      new Coches("sedan","1500","red"),
      new Coches("copupe","2500","green")
    ];
  }

  ngOnInit() {
  }

  onSubmit(){
    this._coches.push(this._coche);
    this._coche = new Coches("","","");
  }

}
