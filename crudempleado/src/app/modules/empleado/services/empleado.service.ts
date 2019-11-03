// angular core
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// interfaces
import { Empleado } from "../interfaces/empleado.interface";
import { Cargo } from "../../cargo/interfaces/cargo.interface";
import { Proyecto } from "../../proyecto/interfaces/proyecto.interface";

// rxjs
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EmpleadoService {
  url = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${this.url}/employees`);
  }

  getUser(id): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${this.url}/employees/${id}`);
  }

  getEmployee(id): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${this.url}/employees/${id}`);
  }

  addUser(user): Observable<Empleado> {
    return this.http.post<Empleado>(`${this.url}/employees`, user);
  }

  updateUser(id, user): Observable<any> {
    return this.http.put<any>(`${this.url}/employees/${id}`, user);
  }

  deleteUser(id): Observable<number> {
    return this.http.delete<number>(`${this.url}/employees/${id}`);
  }

  getCargos(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(`${this.url}/cargos`);
  }

  getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.url}/proyectos`);
  }
}
