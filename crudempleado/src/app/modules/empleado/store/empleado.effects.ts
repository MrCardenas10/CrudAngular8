import { EmpleadoService } from "../services/empleado.service";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import * as EmpleadoActions from './empleado.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CargoService } from '../../cargo/services/cargo.service';
import { ProyectoService } from '../../proyecto/services/proyecto.service';


@Injectable()
export class EmployeesEffects {
  @Effect()
  getEmployees$ = this.actions$
    .pipe(
      ofType<EmpleadoActions.TryLoadEmployees>(EmpleadoActions.TRY_LOAD_EMPLOYEES),
      switchMap(action => {
        return this.empleadoService.getUsers()
          .pipe(
            map(res => {
              return (new EmpleadoActions.LoadEmployeesSuccess(res));
            }),
            catchError(() => {
              return of(new EmpleadoActions.LoadEmployeesError());
            })
          );
      })
    );

  @Effect()
  getEmployee$ = this.actions$
    .pipe(
      ofType<EmpleadoActions.TryLoadEmployee>(EmpleadoActions.TRY_LOAD_EMPLOYEE),
      switchMap(action => {
        const id = action.payload;
        return this.empleadoService.getUser(id)
          .pipe(
            map(res => {
              return (new EmpleadoActions.LoadEmployeeSuccess(res));
            }),
            catchError(() => {
              return of(new EmpleadoActions.LoadEmployeeError());
            })
          );
      })
    );

  @Effect()
  getCargos$ = this.actions$
    .pipe(
      ofType<EmpleadoActions.TryLoadEmployeesCargos>(EmpleadoActions.TRY_LOAD_EMPLOYEES_CARGOS),
      switchMap(action => {
        return this.empleadoService.getCargos()
          .pipe(
            map(res => {
              return (new EmpleadoActions.LoadEmployeesSuccessCargos(res));
            }),
            catchError(() => {
              return of(new EmpleadoActions.LoadEmployeesErrorCargos());
            })
          );
      })
    );

  @Effect()
  getProyectos$ = this.actions$
    .pipe(
      ofType<EmpleadoActions.TryLoadEmployeesProyectos>(EmpleadoActions.TRY_LOAD_EMPLOYEES_PROYECTOS),
      switchMap(actions => {
        return this.empleadoService.getProyectos()
          .pipe(
            map(res => {
              return (new EmpleadoActions.LoadEmployeesSuccessProyectos(res))
            }),
            catchError(() => {
              return of(new EmpleadoActions.LoadEmployeesErrorProyectos())
            })
          );
      }
      )
    );

  @Effect()
  editEmployee$ = this.actions$
    .pipe(
      ofType<EmpleadoActions.UpdateEmployee>(EmpleadoActions.UPDATE_EMPLOYEE),
      switchMap(action => {
        const { id, user } = action.payload;
        return this.empleadoService.updateUser(id, user)
          .pipe(
            map(() => {
              return (new EmpleadoActions.UpdateEmployeeSuccess());
            }),
            catchError(() => {
              return of(new EmpleadoActions.UpdateEmployeeError());
            })
          );
      })
    );

  @Effect()
  addEmployees$ = this.actions$
    .pipe(
      ofType<EmpleadoActions.CreateEmployee>(EmpleadoActions.CREATE_EMPLOYEE),
      switchMap(action => {
        let user = action.payload;
        return this.empleadoService.addUser(user)
          .pipe(
            map(() => {
              return (new EmpleadoActions.CreateEmployeeSuccess());
            }),
            catchError(() => {
              return of(new EmpleadoActions.CreateEmployeeError());
            })
          );
      })
    );

  @Effect()
  deleteEmployee$ = this.actions$
    .pipe(
      ofType<EmpleadoActions.TryDeleteEmployee>(EmpleadoActions.TRY_DELETE_EMPLOYEE),
      switchMap(action => {
        const id = action.payload;
        return this.empleadoService.deleteUser(id)
          .pipe(
            map(() => {
              return (new EmpleadoActions.DeleteEmployeeSuccess());
            }),
            catchError(() => {
              return of(new EmpleadoActions.DeleteEmployeeError());
            })
          );
      })
    );

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private empleadoService: EmpleadoService,
    private cargoService: CargoService,
    private proyectoService: ProyectoService
  ) {
  }
}