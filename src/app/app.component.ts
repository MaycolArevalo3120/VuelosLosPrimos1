import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vista Boleto';

  constructor(private router:Router){} 

  Listar(){
    this.router.navigate(["listar"]);
  }

  Nuevo(){
    this.router.navigate(["agregar"]);
  }

  editar(){
    this.router.navigate(["editar"]);
  }

  asiento(){
    this.router.navigate(["asiento"]);
  }

  asientoMaycol(){
    this.router.navigate(["seats"]);
  }
}
