import { Injectable } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Animal, Carro } from '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = "http://localhost:3000/animals"
  private apiCarro = "http://localhost:3000/carros"

  constructor(private http: HttpClient) { }

  remove(animals: Animal[], animal: Animal){
    return animals.filter((a) => animal.name !== a.name)

  }

  getAll():Observable<Animal[]>{
     return this.http.get<Animal[]>(this.apiUrl)
  }

  getAllCarros():Observable<Carro[]>{
    return this.http.get<Carro[]>(this.apiCarro)
  }

  getItem(id:number):Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  }

}
