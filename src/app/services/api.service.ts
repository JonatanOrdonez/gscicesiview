import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Computador } from  '../models/computador';

@Injectable()
export class ApiService {

  protected token = "tnrApcPohoar9padK6JTEY3Z8mm7OkzkyLYUXgzjnJbqOg3DT1tOIuhQKBfM";
  constructor(private http: HttpClient) { }

  getComputadores(salaid: number) {
    const url = "https://gscicesiserver.herokuapp.com/api/post/getpcsbysala";
    const data = {api_token: this.token, idsala: salaid};
    const header = {headers: new HttpHeaders({'Content-Type':  'application/json',})};
    return this.http.post(url, data, header).subscribe(
      (data) => console.log(data)
    );
  }
}
