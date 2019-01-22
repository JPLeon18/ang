import { Component, OnInit } from '@angular/core';
import {Fruta} from "./fruta";

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent implements OnInit {
  public ti:string;
  public fruta:Fruta;

  constructor() {

    this.ti="component ti";
    this.fruta = new Fruta('mango','dulce',true);
  }

  ngOnInit() {
  }



}
