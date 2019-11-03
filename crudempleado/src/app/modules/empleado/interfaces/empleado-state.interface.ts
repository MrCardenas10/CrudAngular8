import { Empleado } from "./empleado.interface";
import { Cargo } from "../../cargo/interfaces/cargo.interface";
import { Proyecto } from "../../proyecto/interfaces/proyecto.interface";

export interface EmpleadoState {
  employees: Empleado[];
  id: number;
  employee: Empleado[];
  cargos: Cargo[];
  proyectos: Proyecto[];
}
