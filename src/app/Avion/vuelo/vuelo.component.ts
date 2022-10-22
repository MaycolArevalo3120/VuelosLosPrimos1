import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from '../../Service/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Avion } from '../../Model/Avion';
import { Tripulacion } from '../../Model/Tripulacion';
import { Vuelo } from '../../Model/Vuelo';


@Component({
  selector: 'app-vuelo',
  templateUrl: './vuelo.component.html',
  styleUrls: ['./vuelo.component.css']
})
export class VueloComponent implements OnInit {
  tripulantes: any = []
  aviones!: Avion[]//any = [{nombre: "Boeing 737",id:1}, {nombre:"Boeing 736",id:2}]
  tripulanteSelect!: Tripulacion[]// any = [{ nombre: "Saul", id: 1 }, { nombre: "Mycol", id: 2 }]

  tripFormGroup!: FormGroup;
  constructor(private service: ServiceService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.tripFormGroup = new FormGroup({
      selectTripulante: new FormControl(),
      selectAvion: new FormControl(),
    });

    this.AgregarDataAviones()
    this.AgregarDataTripulante()
  }

  AgregarDataTripulante() {
    this.service.getTripulacion()
      .subscribe(data => {
        this.tripulanteSelect = data;
      })
  }


  AgregarDataAviones() {
    this.service.getAviones()
      .subscribe(data => {
        this.aviones = data;
      })
  }

  ngOnInit() {
    //Cargar los datos y samplearlos a los aviones, tripulantes

  }
  GurdarTripulante() {
    let variable = this.tripFormGroup.get('selectTripulante')?.value
    console.warn(variable) 
    console.warn(variable.idtripulante)
    this.tripulantes.push({ idtripulante: this.tripFormGroup.get('selectTripulante')?.value })
  }
  Eliminar(elemento: any) {
    console.log(elemento)
    this.tripulantes.splice(elemento, 1)
  }

  vuelo:Vuelo=new Vuelo();
  GuardarVuelo(//idavion:String,
     fechaSalida:String, horasalida:String,fechallegada:String,horallegada:String,precio:String,aeropuertoentrada:String,aeropuertosalida:String) {
    this.vuelo.idavion=Number(this.tripFormGroup.get('selectAvion')?.value );
    this.vuelo.fechasalida=fechaSalida;
    this.vuelo.horasalida=horasalida;
    this.vuelo.fechallegada=fechallegada;
    this.vuelo.horallegada=horallegada;
    this.vuelo.precio=Number(precio);
    this.vuelo.aeropuetosalida=Number(aeropuertosalida);
    this.vuelo.aeropuertollegada=Number(aeropuertoentrada)
   
    this.service.crearVuelo(this.vuelo)
    .subscribe(data=>{
      alert("Se agrego un vuelo");
      this.router.navigate(["listarVuelo"]);
    })
  }


/*
  avion:Avion = new Avion();
  Guardar(nombre:String, filas:String, columnas:String) {
   
   this.avion.nombre=nombre;
   this.avion.filas=filas;
   this.avion.columnas=columnas;
   this.avion.idestadoavion=1;
   this.avion.usuariocreacion="andy";
   this.avion.idmodelo=1;
   this.avion.idestadoregistrotabla=1;

    this.service.crearAvion(this.avion)
    .subscribe(data=>{
      alert("Se agrego un avion");
      this.router.navigate(["listar"]);
    })
  }
*/

}
