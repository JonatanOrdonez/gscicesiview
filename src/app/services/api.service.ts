import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Computador } from  '../models/computador';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Reserva } from '../models/reserva';
import { Reservaaux } from '../models/reservaaux';

@Injectable()
export class ApiService {

  protected token = 'tnrApcPohoar9padK6JTEY3Z8mm7OkzkyLYUXgzjnJbqOg3DT1tOIuhQKBfM';
  protected urlpost = 'https://gscicesiserver.herokuapp.com/api/post';
  protected urlget = '/api/get/';
  constructor(private http: Http) { }

  getComputadores(salaid: number) : Observable<Computador[]>{
    return this.http.post(this.urlpost+'/getpcsbysala',
    {api_token: this.token, idsala: salaid},
    {headers: new Headers({'Content-Type':  'application/json'})}).map(
      (response:Response)=> response.json()
    );
  }

  getSalas() {
    return this.http.post(this.urlpost+'/getsalas',
    {api_token: this.token},
    {headers: new Headers({'Content-Type':  'application/json'})}).map(
      (response:Response)=> response.json()
    );
  }

  getDias() {
    return this.http.post(this.urlpost+'/getdias',
    {api_token: this.token},
    {headers: new Headers({'Content-Type':  'application/json'})}).map(
      (response:Response)=> response.json()
    );
  }

  addReserva(reserva: Reservaaux) {
    return this.http.post(this.urlpost+'/addreserva',
    {api_token: this.token, fecha_inicio: reserva.fecha_inicio, fecha_fin: reserva.fecha_fin, 
      descripcion: reserva.descripcion, dia_id: reserva.dia_id, sala_id: reserva.sala_id},
    {headers: new Headers({'Content-Type':  'application/json'})}).map(
      (response:Response)=> response.json()
    );
  }

  getReservas(idsala: number) {
    return this.http.post(this.urlpost+'/getreservassala',
    {api_token: this.token, idsala: idsala},
    {headers: new Headers({'Content-Type':  'application/json'})}).map(
      (response:Response)=> response.json()
    );
  }

  getDiaSemana(iddia: number) {
    return this.http.post(this.urlpost+'/getdiasemana',
    {api_token: this.token, id: iddia},
    {headers: new Headers({'Content-Type':  'application/json'})}).map(
      (response:Response)=> response.json()
    );
  }
  
}
