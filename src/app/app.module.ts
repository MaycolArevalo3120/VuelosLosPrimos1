import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Avion/listar/listar.component';
import { AgregarComponent } from './Avion/agregar/agregar.component';
import { EditarComponent } from './Avion/editar/editar.component';
import{FormsModule, ReactiveFormsModule}from '@angular/forms'
import{ServiceService} from '../app/Service/service.service'
import{HttpClientModule} from '@angular/common/http';
import { AsientoComponent } from './Avion/asiento/asiento.component';
import { SeatsComponent } from './Avion/seats/seats.component'
import { MatSelectModule } from '@angular/material/select';
import { VueloComponent } from './Avion/vuelo/vuelo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    AsientoComponent,
    SeatsComponent,
    VueloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
