import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../services/api.service';
import { Dia } from '../../models/dia';
import { Sala } from '../../models/sala';
import { Reservaaux } from '../../models/reservaaux';
import { Reserva } from '../../models/reserva';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  salas: Sala[];
  dias: Dia[];
  dia: Dia;
  sala: Sala;
  fechaInicio: string;
  fechaFin: string;
  descripcion: string;
  reservas: Reserva[];
  idsala: number = 0;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.loadDias();
    this.getSalas();
  }

  loadDias() {
    this.api.getDias().subscribe(
      (data) => { this.dias = data }
    );
  }

  setDia(dia: Dia) {
    this.dia = dia;
  }

  getSalas() {
    this.api.getSalas().subscribe(
      (data) => { this.salas = data }
    );
  }

  setSala(sala: Sala) {
    this.sala = sala;
    this.idsala = sala.id;
    this.getReservas();
  }

  onKeyInit(event: KeyboardEvent) {
    this.fechaInicio = (<HTMLInputElement>event.target).value.toString();
  }

  onKeyFin(event: KeyboardEvent) {
    this.fechaFin = (<HTMLInputElement>event.target).value.toString();
  }

  onKeyDescripcion(event: KeyboardEvent) {
    this.descripcion = (<HTMLInputElement>event.target).value.toString();
  }

  guardar() {
    let reserva: Reservaaux = {
      fecha_inicio: this.fechaInicio,
      fecha_fin: this.fechaFin,
      descripcion: this.descripcion,
      dia_id: this.dia.id,
      sala_id: this.sala.id
    }
    this.api.addReserva(reserva).subscribe(
      (data) => { this.reservas = data }
    );
  }

  getReservas() {
    this.api.getReservas(this.idsala).subscribe(
      (data) => { this.reservas = data }
    );
  }

  getDiaSemana(id: number) {
    const dia = new Dia();
    this.api.getDiaSemana(id).subscribe(
      (data) => { this.dia = data }
    );
    return dia.dia_semana;
  }
}
