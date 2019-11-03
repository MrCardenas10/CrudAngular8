import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../interfaces/proyecto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.url}/proyectos`);
  }

  getProyecto(id) {
    return this.http.get(`${this.url}/proyectos/${id}`);
  }

  addProyecto(proyecto) {
    return this.http.post(`${this.url}/proyectos`, proyecto);
  }

  deleteProyecto(id) {
    return this.http.delete(`${this.url}/proyectos/${id}`);
  }

  updateProyecto(proyecto, id) {
    return this.http.put(`${this.url}/proyectos/${id}`, proyecto);
  }

}
