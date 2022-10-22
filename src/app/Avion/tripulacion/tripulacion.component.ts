import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tripulacion } from 'src/app/Model/Tripulacion';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-tripulacion',
  templateUrl: './tripulacion.component.html',
  styleUrls: ['./tripulacion.component.css']
})
export class TripulacionComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  tripulacion:Tripulacion = new Tripulacion();
  ngOnInit(): void {
  }

  Guardar(nombre:String, puesto:String, estado:String){

    this.tripulacion.nombre = nombre;
    this.tripulacion.puesto = puesto;
    this.tripulacion.estado = estado;

    this.service.crearTripulacion(this.tripulacion).subscribe(data=>{
      alert("Se agrego un nuevo tripulante");
      this.router.navigate(["listar"]);
    })

  }
}