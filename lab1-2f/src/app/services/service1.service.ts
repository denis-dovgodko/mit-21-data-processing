import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from '../interface/entity';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  url:string = "http://localhost:8081/lab1-2/Servlet1";
  constructor(private http:HttpClient) { }
  getEntities():Observable<Entity[]>{
    return this.http.get<Entity[]>(this.url);
  }
}
