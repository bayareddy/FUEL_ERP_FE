import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_url:string = '127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  login(data: any) : Observable<any> {
    console.log(data)
    let url = this.base_url + 'login';
    return this.http.post(url, data);
  }
}
