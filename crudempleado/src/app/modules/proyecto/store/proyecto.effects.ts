import * as ProyectoActions from './proyecto.actions';
import { ProyectoService } from "../services/proyecto.service";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoadEmployeesSuccess } from '../../empleado/store/empleado.actions';

@Injectable()
export class ProyectoEffects {
    @Effect()
    getProyectos$ = this.actions$
        .pipe(
            ofType<ProyectoActions.TryGetProyectos>(ProyectoActions.TRY_GET_PROYECTOS),
            switchMap(actions => {
                return this.proyectoService.getProyectos()
                    .pipe(
                        map(res => {
                            return (new ProyectoActions.LoadProyectosSuccess(res))
                        }),
                        catchError(() => {
                            return of(new ProyectoActions.LoadProyectosError())
                        })
                    );
            }
            )
        );

    constructor(private proyectoService: ProyectoService,
        private actions$: Actions,
        private store: Store<any>) { }
}
