import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asiento',
  templateUrl: './asiento.component.html',
  styleUrls: ['./asiento.component.css']
})
export class AsientoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  columnas: String[] = ["1","","",""];
  filas : String[] = ["1","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];

  crearID(fila: String, columna: String): String {
    fila = fila + "-";
    return fila.concat(columna.toString());
  }

  pintar(identificador: String): void {
    let valorTxt: String = "";
    document.getElementById("0-0");
  }

  Guardar() {
    let check = document.getElementById("0-0");

    console.warn("valor ",  check?.ariaChecked);
    check?.setAttribute("aria-checked", "true");

    
  }

}

