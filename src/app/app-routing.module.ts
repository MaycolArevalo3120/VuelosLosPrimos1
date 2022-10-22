import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Avion/listar/listar.component';
import { AgregarComponent } from './Avion/agregar/agregar.component';
import { EditarComponent } from './Avion/editar/editar.component';
import { AsientoComponent } from './Avion/asiento/asiento.component';
import { SeatsComponent } from './Avion/seats/seats.component';
import { VueloComponent } from './Avion/vuelo/vuelo.component';

const routes: Routes = [
{path:'listar', component:ListarComponent},
{path:'agregar',component:AgregarComponent},
{path:'editar', component:EditarComponent},
{path:'asiento', component:AsientoComponent},
{path:'seats/:idAvion', component:SeatsComponent},
{path:'vuelo', component:VueloComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
