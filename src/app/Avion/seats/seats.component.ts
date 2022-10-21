import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Avion } from 'src/app/Model/Avion'; //revisar
import { Asiento } from '../../Model/Asiento';//revisar
import { ServiceService } from 'src/app/Service/service.service';//revisa
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  @Input() elementosAvion: any;
  avion: Avion[] = [];
  isDisabled!: Boolean;

  asientoSelect!: Asiento[];
 
  constructor(private serviceAsiento: ServiceService, private router: Router) { }
  ngOnInit(): void {
    this.serviceAsiento.getAvion().subscribe(data => {
      this.avion = data;
      //console.log(this.avion[1])
      this.numeroFilas = parseInt(this.avion[2].filas.toString())
      this.numeroColumnas = parseInt(this.avion[2].columnas.toString())
      this.ingresoDeFilasColumas()
      this.estadoAsiento = Array.from(Array(this.numeroFilas), () => new Array(this.numeroColumnas).fill(0))
      this.asientosPreCargados()
      //console.log(this.elementosAvion)

    })
  }


  asientosPreCargados() {

    /* this.estadoAsiento[1][2] = 1
     this.estadoAsiento[1][5] = 1
     this.estadoAsiento[2][4] = 1
     this.estadoAsiento[6][2] = 1
     this.estadoAsiento[4][2] = 1*/
   /* this.estadoAsiento[0][0] = 1
    this.estadoAsiento[9][3] = 1*/
    this.serviceAsiento.getAsientosAvionSeleccionados(2)
      .subscribe(data => {
        this.asientoSelect = data;
      
        console.warn("data ",this.asientoSelect)
        for (let i = 0; i < this.asientoSelect.length; i++) {
          this.estadoAsiento[Number(this.asientoSelect[i].fila)][Number(this.asientoSelect[i].columna)]=1
          
         }
      })
      
      /*this.asientoSelect.forEach(function (asiento)=> {
      this.estadoAsiento[Number(asiento.fila)][Number(asiento.columna)]=0
      })
      */

     
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
    // console.log(evento.srcElement.id)
    this.cambiarEstadoAsiento(evento.srcElement.id)
    //console.log(this.estadoAsiento)
  }

  cambiarEstadoAsiento(idasiento: any) {
    const id = idasiento.split("-")
    let fila = parseInt(id[0])
    let columna = parseInt(id[1])
    let estadoActual = this.estadoAsiento[fila - 1][columna - 1]
    if (estadoActual == 0) {
      this.estadoAsiento[fila - 1][columna - 1] = 1;
      this.asiento.fila = id[0];
      this.asiento.columna = id[1];
      // console.log(this.asiento.fila + ' ya las tengo ' + this.asiento.columna)
    }
    else
      this.estadoAsiento[fila - 1][columna - 1] = 0
    this.isDisabled = false
  }

  SeleccionCheck(fila: number, columna: number) {
    // console.log("entro a metodo seleccion, fila:", fila, "   columna:", columna)
    if (this.estadoAsiento[fila][columna] == 1) {
      this.estadoAsiento[fila][columna] = 1;
    }
  }

  GuardarSeleccioestadoAsiento() {
    this.asiento.fila = this.asiento.fila
    // console.log(this.asiento.nombre)
    this.serviceAsiento.CrearAsiento(this.asiento)
      .subscribe(data => {
        alert("se agrego asiento");
        this.router.navigate(["seats"])
      })

  }

  asiento: Asiento = new Asiento();
  Guardar(fila: String, columna: String) {
    this.asiento = new Asiento();
    this.asiento.idAvion = 2//this.elementosAvion.idavion; // g.idavion;
    this.asiento.fila = fila;
    this.asiento.columna = columna;
    this.asiento.idestadoregistroTabla = 1;
    console.warn(this.asiento)
    this.serviceAsiento.CrearAsiento(this.asiento)
      .subscribe(data => {
        // alert("se agrego asiento");
        //this.router.navigate(["seats"])
      })


  }

  AsientosSeleccionados() {
    //console.log(this.estadoAsiento)
    //debugger;
    //console.log("linea 115")
    //fila
    for (let f = 0; f < this.estadoAsiento.length; f++) {
      //console.log("linea 117")
      //columna
      for (let c = 0; c < this.estadoAsiento[f].length; c++) {
        //console.log("linea 119")
        if (this.estadoAsiento[f][c] == 1) {
          console.log("entro al if")
          console.log(this.estadoAsiento[f][c])
          this.Guardar(f.toString(), c.toString())

        }

      }
    }
  }
}
