import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Computador } from  '../models/computador';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

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
}
