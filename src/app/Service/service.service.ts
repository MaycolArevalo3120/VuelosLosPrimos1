import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Avion } from '../Model/Avion';
import { Asiento } from '../Model/Asiento';
import { Tripulacion } from '../Model/Tripulacion';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }

  //Url='';

  getAviones() {
    return this.http.get<Avion[]>('http://localhost:8099/api/avion/getListadoAvion');
  }

  crearAvion(avion: Avion) {
    return this.http.post<Avion>('http://localhost:8099/api/asientopasajero/crearAvion', avion);
  }

  getAerolineas() {
    // return this.http.get<Aerolinea[]>(this.url)
  }

  getAvion() {
    return this.http.get<Avion[]>('http://localhost:8099/api/avion/getListadoAvion')
  }

  CrearAsiento(asiento: Asiento) {
    return this.http.post<Asiento>('http://localhost:8099/api/asientopasajero/crearAsiento', asiento)
  }
  getAsientosAvionSeleccionados(idAvion: number) {
    return this.http.get<Asiento[]>(`http://localhost:8099/api/asientopasajero/getAsientoPasajeroxAvion?IdAvion=${idAvion}`)
  }



}
