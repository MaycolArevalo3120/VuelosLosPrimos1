import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tripulacion } from 'src/app/Model/Tripulacion';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar-tripulacion',
  templateUrl: './listar-tripulacion.component.html',
  styleUrls: ['./listar-tripulacion.component.css']
})
export class ListarTripulacionComponent implements OnInit {

  tripulantes!: Tripulacion[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {

    this.service.getTripulacion()
    .subscribe(data=>{
      this.tripulantes=data;
    })

  }

}
