import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Computador } from  '../models/computador';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ApiService {

  protected token = "tnrApcPohoar9padK6JTEY3Z8mm7OkzkyLYUXgzjnJbqOg3DT1tOIuhQKBfM";

  constructor(private http: Http) { }

  getComputadores(salaid: number) : Observable<Computador[]>{
    return this.http.post('https://gscicesiserver.herokuapp.com/api/post/getpcsbysala',
    {api_token: this.token, idsala: salaid},
    {headers: new Headers({'Content-Type':  'application/json'})}).map(
      (response:Response)=> response.json()
    );
  }
}
