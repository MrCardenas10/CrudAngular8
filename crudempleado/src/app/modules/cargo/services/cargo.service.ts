import { Cargo } from './../interfaces/cargo.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  url = "http://localhost:3000/"
  constructor(private http:HttpClient) { }

  getCargos(): Observable<any>{
    return this.http.get(`${this.url}cargos`);
  }

  getCargo(id){
    return this.http.get(`${this.url}cargos/${id}`);
  }

  addCargo(cargo){
    return this.http.post(`${this.url}cargos`, cargo);
  }

  deleteCargo(id){
    return this.http.delete(`${this.url}cargos/${id}`);
  }

  updateCargo(cargo,id){
    return this.http.put(`${this.url}cargos/${id}`, cargo);
  }

}
