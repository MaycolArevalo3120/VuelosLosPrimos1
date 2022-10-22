import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  FilaColumnaAvion!: Avion[];
  idAvion_Asiento!: number;
  numeroFilas!: number;
  numeroColumnas!: number;
  constructor(private serviceAsiento: ServiceService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.paramMap.subscribe((params:any) => {
      this.idAvion_Asiento = Number(params.get('idAvion') as string);

    })
    this.ngOnInit()
  }
  ngOnInit(): void {
    this.serviceAsiento.getAvion().subscribe((data:any) => {
      this.avion = data;
      //this.numeroFilas = //parseInt(this.avion[2].filas.toString())
      //this.numeroColumnas =6// parseInt(this.avion[2].columnas.toString())

      this.ingresoDeFilasColumas()
      //andy
      // this.estadoAsiento = Array.from(Array(this.numeroFilas), () => new Array(this.numeroColumnas).fill(0))

      this.asientosPreCargados()

    })
  }


  asientosPreCargados() {
    this.serviceAsiento.getAsientosAvionSeleccionados(this.idAvion_Asiento)
      .subscribe((data:any) => {
        this.asientoSelect = data;

        console.warn("data ", this.asientoSelect)
        for (let i = 0; i < this.asientoSelect.length; i++) {
          this.estadoAsiento[Number(this.asientoSelect[i].fila)][Number(this.asientoSelect[i].columna)] = 1

        }
      })
  }

  //ANDERSSON REVISA


  ingresoDeFilasColumas() {
    //this.Filas = Array.from({ length: this.numeroFilas }, (_, i) => i + 1)
    //this.Columna = Array.from({ length: this.numeroColumnas }, (_, i) => i + 1)
    this.CargarFilaColumnaxidAvion()

  }
  Filas: number[] = [];
  estadoAsiento: any[][] = [];
  Columna: number[] = [];

  crearID(fila: String, columna: String): String {
    fila = fila + "-";
    return fila.concat(columna.toString());
  }

  guardarEstadoAsiento(evento: any) {
    this.cambiarEstadoAsiento(evento.srcElement.id)
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
      .subscribe((data:any) => {
        // alert("se agrego asiento");
        this.router.navigate(["seats"])
      })

  }

  asiento: Asiento = new Asiento();
  Guardar(fila: String, columna: String) {
    this.asiento = new Asiento();
    this.asiento.idAvion = this.idAvion_Asiento;//this.elementosAvion.idavion; // g.idavion;
    this.asiento.fila = fila;
    this.asiento.columna = columna;
    this.asiento.idestadoregistroTabla = 1;
    this.asiento.idPersona = 1
    this.asiento.usuarioCreacion = 'andy';
    this.asiento.nombre = this.crearID(fila, columna)
    this.asiento.codigo = this.idAvion_Asiento.toString() + "_" + this.crearID(fila, columna)

    console.warn(this.asiento)
    this.serviceAsiento.CrearAsiento(this.asiento)
      .subscribe((data:any) => {
        // alert("se agrego asiento");
        //this.router.navigate(["seats"])
      })
    
  }

  AsientosSeleccionados() {
    //fila
    for (let f = 0; f < this.estadoAsiento.length; f++) {
      //columna
      for (let c = 0; c < this.estadoAsiento[f].length; c++) {

        if (this.estadoAsiento[f][c] == 1) {
          this.Guardar(f.toString(), c.toString())
          //this.isDisabled=true
        }
      }
    }
    alert("se han guardado sus asientos")
    this.router.navigate(["listar"])
  }



  CargarFilaColumnaxidAvion() {

  this.serviceAsiento.getListadoAvionXId(this.idAvion_Asiento).subscribe((resultado:any) => {
     console.warn(resultado);
     if (resultado != undefined) {
       this.FilaColumnaAvion = resultado;

        /*for (let i = 0; i < resultado.length; i++) {
          this.numeroFilas = Number(resultado[i].filas)
          this.numeroColumnas = Number(resultado[i].columnas)
          this.Filas = Array.from({ length: this.numeroFilas }, (_, i) => i + 1)
          this.Columna = Array.from({ length: this.numeroColumnas }, (_, i) => i + 1)
 
        }*/
        for (let i = 0; i < this.FilaColumnaAvion.length; i++) {
          this.numeroFilas = Number(this.FilaColumnaAvion[i].filas)
          this.numeroColumnas = Number(this.FilaColumnaAvion[i].columnas)
          this.Filas = Array.from({ length: this.numeroFilas }, (_, i) => i + 1)
          this.Columna = Array.from({ length: this.numeroColumnas }, (_, i) => i + 1)
        }
        this.estadoAsiento = Array.from(Array(this.numeroFilas), () => new Array(this.numeroColumnas).fill(0))
      }
    })

  }


}
