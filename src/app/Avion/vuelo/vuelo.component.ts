import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-vuelo',
  templateUrl: './vuelo.component.html',
  styleUrls: ['./vuelo.component.css']
})
export class VueloComponent implements OnInit {
  tripulantes: any = []
  aviones: any = [{nombre: "Boeing 737",id:1}, {nombre:"Boeing 736",id:2}]
  tripulanteSelect: any = [{nombre: "Saul",id:1}, {nombre:"Mycol",id:2}]
  
  tripFormGroup!: FormGroup;
  constructor() { 
    this.tripFormGroup= new FormGroup({
      selectTripulante: new FormControl(),
      selectAvion: new FormControl(),
  });
  }

  ngOnInit() {
    //Cargar los datos y samplearlos a los aviones, tripulantes

  }
  GurdarTripulante(){
    console.log( this.tripFormGroup.get('selectTripulante')?.value)
    this.tripulantes.push({nombre: this.tripFormGroup.get('selectTripulante')?.value})
  }
  Eliminar(elemento:any){
    console.log(elemento)
    this.tripulantes.splice(elemento,1)
  }
  GuardarVuelo(){
    //guardar el vuelo completo
  }

}
