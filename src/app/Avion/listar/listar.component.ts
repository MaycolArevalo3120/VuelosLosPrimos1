import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Avion } from 'src/app/Model/Avion';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  aviones!:Avion[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAviones()
    .subscribe(data=>{
      this.aviones=data;
    })
  }


  

}
