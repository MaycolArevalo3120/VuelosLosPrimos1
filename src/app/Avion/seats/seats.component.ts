import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Avion } from 'src/app/Model/Avion'; //revisar
import { Asiento } from '../../Model/Asiento';//revisar
import { ServiceService } from 'src/app/Service/service.service';//revisa


@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  
  @Input() elementosAvion: any;
  avion: Avion[] = [];
  isDisabled!: Boolean;
  constructor(private serviceAsiento: ServiceService, private router: Router) { }
  ngOnInit(): void {
    this.serviceAsiento.getAvion().subscribe(data => {
      this.avion = data;
      console.log(this.avion[1])
      this.numeroFilas = parseInt(this.avion[2].filas.toString())
      this.numeroColumnas = parseInt(this.avion[2].columnas.toString())
      this.ingresoDeFilasColumas()
      this.estadoAsiento = Array.from(Array(this.numeroFilas), () => new Array(this.numeroColumnas).fill(0))
      this.asientosPreCargados()
      console.log(this.elementosAvion)
      
    })
  }


  asientosPreCargados() {
    this.estadoAsiento[1][2] = 1
    //document.getElementById("2-3")?.ariaDisabled = true; // disable patch
    this.estadoAsiento[1][5] = 1
    this.estadoAsiento[2][4] = 1
    this.estadoAsiento[6][2] = 1
    this.estadoAsiento[4][2] = 1
  }


  numeroFilas: number = 0;
  numeroColumnas: number = 0;

  ingresoDeFilasColumas() {
    this.Filas = Array.from({ length: this.numeroFilas }, (_, i) => i + 1)
    this.Columna = Array.from({ length: this.numeroColumnas }, (_, i) => i + 1)

  }
  Filas: number[] = [];
  estadoAsiento: any[][] = [];
  Columna: number[] = [];

  crearID(fila: String, columna: String): String {
    fila = fila + "-";
    return fila.concat(columna.toString());
  }

  guardarEstadoAsiento(evento: any) {
    console.log(evento.srcElement.id)
    this.cambiarEstadoAsiento(evento.srcElement.id)
    console.log(this.estadoAsiento)
    //this.bloquearAsiento()

    //this.numeroColumnas = this.avion[1].columnas

  }

  cambiarEstadoAsiento(idasiento: any) {
    //11-5
    const id = idasiento.split("-")
    let fila = parseInt(id[0])
    let columna = parseInt(id[1])
    let estadoActual = this.estadoAsiento[fila - 1][columna - 1]
    if (estadoActual == 0){
      this.estadoAsiento[fila - 1][columna - 1] = 1;

      this.asiento.fila = id[0];
      this.asiento.columna =  id[1];
      console.log(this.asiento.fila+' ya las tengo '+this.asiento.columna)
      
      
    }
    else
    this.estadoAsiento[fila - 1][columna - 1] = 0
    this.isDisabled= false

    //console.log(this.avion)
    //this.estadoAsiento[fila - 1][columna - 1] = !this.estadoAsiento[fila - 1][columna - 1]
  }
/*
  bloquearAsiento() {
    let check = document.getElementById("2-3");
    console.warn("andy ", check)
    if (check?.ariaDisabled != null) {
      check.ariaDisabled = "0";
      console.warn("andy ", check)
    }
  }
*/
  SeleccionCheck(fila: number, columna: number) {
    //debugger;
    console.log("entro a metodo seleccion, fila:", fila, "   columna:", columna)
    //console.warn(this.estadoAsiento[fila][columna] == 1)
    if (this.estadoAsiento[fila][columna] == 1) {
      this.estadoAsiento[fila][columna] = 1;
      console.log("entro al if")
    }
    console.log("antes de salir del metodo")
  }

  //  estadoAsiento: any[][] = [];
  GuardarSeleccioestadoAsiento() {
    
    //for (let i = 0; i < this.estadoAsiento.length; i++) {
      //const element = array[i];
      
      this.asiento.fila=this.asiento.fila
      //this.asiento.columna=columna seleccionada
      debugger;
      console.log(this.asiento.nombre)

      this.serviceAsiento.CrearAsiento(this.asiento)
      .subscribe(data => {
        alert("se agrego asiento");
        this.router.navigate(["seats"])
      })
    //
    

    //debugger;
    //var fill = parseInt(this.asiento.fila.toString())
    //var coll= parseInt(this.asiento.columna.toString())
    //console.log(tipo)
    //console.log(this.estadoAsiento[fill][coll])
/*
    if (this.estadoAsiento[parseInt(this.asiento.fila.toString())][parseInt(this.asiento.columna.toString())] == 1) {
      console.log("si est� en estado reservado")
    }
*/

  }

  asiento: Asiento = new Asiento();
  Guardar(fila:String,columna:String) {


    this.asiento.idavion =this.elementosAvion.idavion; // g.idavion;
    this.asiento.fila = fila;
    this.asiento.columna = columna;

    this.serviceAsiento.CrearAsiento(this.asiento)
      .subscribe(data => {
        alert("se agrego asiento");
        this.router.navigate(["seats"])
      })


  }

}
