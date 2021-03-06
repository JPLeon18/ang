import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // [ngModel]
import { FormsModule } from "@angular/forms"; // [ngModule]
import { HttpModule } from "@angular/http";


import { routing, appRoutingProviders} from "./app.routing"; // Rutas del App.Routing.ts


import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ConversorPipe } from "./pipe/conversor.pipe";
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadosComponent,
    InicioComponent,
    ContactoComponent,
    ConversorPipe,
    CochesComponent,
    PlantillasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
