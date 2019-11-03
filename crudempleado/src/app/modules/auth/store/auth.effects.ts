// angular core
import { Injectable } from '@angular/core';

// dependencies
import { of, Observable } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

// services
import { AuthService } from './../../../core/services/auth.service';

// ngrx
import * as AuthActions from './auth.actions';
import { EmpleadoService } from '../../empleado/services/empleado.service';

@Injectable()
export class AuthEffects {
    @Effect()
    getEmployee$ = this.actions$
      .pipe(
        ofType<AuthActions.LoadProfile>(AuthActions.LOAD_USER_PROFILE),
        switchMap(action => {
          const id = action.payload;
          return this.empleadoService.getEmployee(id)
            .pipe(
              map(res => {
                return (new AuthActions.LoadProfileSuccess(res));
              }),
              catchError(() => {
                return of(new AuthActions.LoadProfileError());
              })
            );
        })
      );
    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private empleadoService: EmpleadoService
      ) {
      }
}
