import { Component, OnInit } from '@angular/core';
import { Vuelo } from '../../Model/Vuelo';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-vuelo',
  templateUrl: './listar-vuelo.component.html',
  styleUrls: ['./listar-vuelo.component.css']
})
export class ListarVueloComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  vuelos!: Vuelo[];
  ngOnInit(): void {

    this.service.getVuelos()
      .subscribe(data => {
        this.vuelos = data;
      })
  }

  selectAsiento(idAvione: number) {
    this.router.navigate(['seats', idAvione])
  }

}
