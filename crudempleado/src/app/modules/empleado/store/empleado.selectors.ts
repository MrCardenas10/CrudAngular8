import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getEmployees = (state: any) => state['employees'];
export const getEmployee = (state: any) => state['employee'];
export const getCargosEmployees = (state: any) => state['cargos'];
export const getProyectosEmployees = (state: any) => state['proyectos'];

export const getEmployeesState = createFeatureSelector<any>('empleados');

export const getEmployeesListState = createSelector(getEmployeesState, getEmployees);
export const getEmployeeState = createSelector(getEmployeesState, getEmployee);
export const getCargosEmployeesState = createSelector(getEmployeesState, getCargosEmployees);
export const getProyectosEmployeesState = createSelector(getEmployeesState, getProyectosEmployees);
