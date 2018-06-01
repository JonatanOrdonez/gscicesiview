import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Computador } from '../../models/computador';
import { Observable } from 'rxjs/Observable';
import { Sala } from '../../models/sala';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  computadores : Computador[];
  salas : Sala[];
  idsala: number = 0;
  private interval: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.loadInterval();
    this.getsalas();
  }

  loadInterval() {
    this.refreshpcs();
    this.interval = setInterval(() => { 
        this.refreshpcs(); 
    }, 2000);
  }

  refreshpcs() {
    this.api.getComputadores(this.idsala).subscribe(
      (pcs) => { this.computadores = pcs; 
        this.computadores.sort((compA,compB)=>{
          return compA.idComputador.localeCompare(compB.idComputador);
        });}
    )
   
  }

  getsalas() {
    this.api.getSalas().subscribe(
      (sals) => { this.salas = sals }
    );
  }

  cambiarSala(sala: Sala) {
    this.idsala = sala.id;
    this.refreshpcs();
  }

}
