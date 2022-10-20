import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Avion } from '../../Model/Avion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
  }

  avion:Avion = new Avion();
  Guardar(nombre:String, filas:String, columnas:String) {
   
   this.avion.nombre=nombre;
   this.avion.filas=filas;
   this.avion.columnas=columnas;

    this.service.crearAvion(this.avion)
    .subscribe(data=>{
      alert("Se agrego un avion");
      this.router.navigate(["listar"]);
    })
  }

}
