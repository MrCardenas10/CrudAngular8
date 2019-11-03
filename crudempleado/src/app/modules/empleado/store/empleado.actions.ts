import { Action } from '@ngrx/store';
import { Empleado } from '../interfaces/empleado.interface';
import { Cargo } from '../../cargo/interfaces/cargo.interface';
import { Proyecto } from '../../proyecto/interfaces/proyecto.interface';



export const TRY_LOAD_EMPLOYEES = '[Empleado] Try get empleados';
export const LOAD_EMPLOYEES_SUCCESS = '[Empleado] Try get empleados success';
export const LOAD_EMPLOYEES_ERROR = '[Empleado] Try get empleados error';
export const TRY_LOAD_EMPLOYEE = '[Empleado] Try get empleado';
export const LOAD_EMPLOYEE_SUCCESS = '[Empleado] Try get empleado success';
export const LOAD_EMPLOYEE_ERROR = '[Empleado] Try get empleado error';
export const TRY_DELETE_EMPLOYEE = '[Empleado] Try delete empleado';
export const DELETE_EMPLOYEE_SUCCESS = '[Empleado] Try delete empleado success';
export const DELETE_EMPLOYEE_ERROR = '[Empleado] Try delete empleado error';
export const CREATE_EMPLOYEE = '[Empleado] Try create empleado';
export const CREATE_EMPLOYEE_SUCCESS = '[Empleado] Try create empleado success';
export const CREATE_EMPLOYEE_ERROR = '[Empleado] Try create empleado error';
export const UPDATE_EMPLOYEE = '[Empleado] Try update empleado';
export const UPDATE_EMPLOYEE_SUCCESS = '[Empleado] Try update empleado success';
export const UPDATE_EMPLOYEE_ERROR = '[Empleado] Try update empleado error';
export const TRY_LOAD_EMPLOYEES_CARGOS = '[Empleado] Try get empleados cargos';
export const LOAD_EMPLOYEES_SUCCESS_CARGOS = '[Empleado] Try get empleados success cargos';
export const LOAD_EMPLOYEES_ERROR_CARGOS = '[Empleado] Try get empleados error cargos';
export const TRY_LOAD_EMPLOYEES_PROYECTOS = '[Empleado] Try get empleados proyectos';
export const LOAD_EMPLOYEES_SUCCESS_PROYECTOS = '[Empleado] Try get empleados success proyectos';
export const LOAD_EMPLOYEES_ERROR_PROYECTOS = '[Empleado] Try get empleados error proyectos';



export class UpdateEmployee implements Action {
    readonly type = UPDATE_EMPLOYEE;
    constructor(public payload: { id: number, user: Empleado }) { }
}

export class UpdateEmployeeSuccess implements Action {
    readonly type = UPDATE_EMPLOYEE_SUCCESS;

}

export class UpdateEmployeeError implements Action {
    readonly type = UPDATE_EMPLOYEE_ERROR;
    constructor() { }
}

export class CreateEmployee implements Action {
    readonly type = CREATE_EMPLOYEE;
    constructor(public payload: Empleado) { }
}

export class CreateEmployeeSuccess implements Action {
    readonly type = CREATE_EMPLOYEE_SUCCESS;

}

export class CreateEmployeeError implements Action {
    readonly type = CREATE_EMPLOYEE_ERROR;
    constructor() { }
}

export class TryLoadEmployees implements Action {
    readonly type = TRY_LOAD_EMPLOYEES;
}

export class LoadEmployeesSuccess implements Action {
    readonly type = LOAD_EMPLOYEES_SUCCESS;

    constructor(public payload: Empleado[]) { }
}

export class LoadEmployeesError implements Action {
    readonly type = LOAD_EMPLOYEES_ERROR;
}

export class TryLoadEmployee implements Action {
    readonly type = TRY_LOAD_EMPLOYEE;
    constructor(public payload: number) { }
}

export class LoadEmployeeSuccess implements Action {
    readonly type = LOAD_EMPLOYEE_SUCCESS;

    constructor(public payload: Empleado[]) { }
}

export class LoadEmployeeError implements Action {
    readonly type = LOAD_EMPLOYEE_ERROR;
}

export class TryDeleteEmployee implements Action {
    readonly type = TRY_DELETE_EMPLOYEE;
    constructor(public payload: number) {

    }
}

export class DeleteEmployeeSuccess implements Action {
    readonly type = DELETE_EMPLOYEE_SUCCESS;
    constructor() {

    }
}

export class DeleteEmployeeError implements Action {
    readonly type = DELETE_EMPLOYEE_ERROR;
}

export class TryLoadEmployeesCargos implements Action {
    readonly type = TRY_LOAD_EMPLOYEES_CARGOS;
}

export class LoadEmployeesSuccessCargos implements Action {
    readonly type = LOAD_EMPLOYEES_SUCCESS_CARGOS;

    constructor(public payload: Cargo[]) { }
}

export class LoadEmployeesErrorCargos implements Action {
    readonly type = LOAD_EMPLOYEES_ERROR_CARGOS;
}

export class TryLoadEmployeesProyectos implements Action {
    readonly type = TRY_LOAD_EMPLOYEES_PROYECTOS;
}

export class LoadEmployeesSuccessProyectos implements Action {
    readonly type = LOAD_EMPLOYEES_SUCCESS_PROYECTOS;

    constructor(public payload: Proyecto[]) { }
}

export class LoadEmployeesErrorProyectos implements Action {
    readonly type = LOAD_EMPLOYEES_ERROR_PROYECTOS;
}



export type EmpleadoActions =
    UpdateEmployeeSuccess |
    UpdateEmployeeError |
    CreateEmployee |
    CreateEmployeeSuccess |
    CreateEmployeeError |
    TryLoadEmployees |
    LoadEmployeesSuccess |
    LoadEmployeesError |
    TryLoadEmployeesProyectos |
    LoadEmployeesSuccessProyectos |
    LoadEmployeesErrorProyectos |
    TryLoadEmployeesCargos |
    LoadEmployeesSuccessCargos |
    LoadEmployeesErrorCargos |
    TryLoadEmployee |
    LoadEmployeeSuccess |
    LoadEmployeeError |
    TryDeleteEmployee |
    DeleteEmployeeSuccess |
    DeleteEmployeeError;