import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


// Componentes disponibles para rutas
import {EmpleadosComponent} from "./empleados/empleados.component";
import {FrutaComponent} from "./fruta/fruta.component";
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from "./coches/coches.component";

const appRoutes:Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'fruta', component: FrutaComponent},
  {path: 'empleado', component: EmpleadosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'contacto/:page', component: ContactoComponent},
  {path: 'coches', component: CochesComponent},

  // Ruta vacia o error 404
  {path: '', component: InicioComponent},
  {path: '**', component: InicioComponent}
];


export  const appRoutingProviders: any[] = [];

export  const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
