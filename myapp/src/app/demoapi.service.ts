import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoapiService {

  constructor(private http:HttpClient) { } //DI
  getData(){
     return this.http.get('http://localhost:6957/emp');
    }
}
