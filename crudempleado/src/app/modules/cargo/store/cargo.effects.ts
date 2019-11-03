import { CargoService } from "../services/cargo.service";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import * as CargoActions from './cargo.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CargosEffects {
  @Effect()
  getCargos$ = this.actions$
    .pipe(
      ofType<CargoActions.TryGetCargos>(CargoActions.TRY_GET_CARGOS),
      switchMap(action => {
        return this.cargoService.getCargos()
          .pipe(
            map(res => {
              return (new CargoActions.LoadGetCargosSuccess(res));
            }),
            catchError(() => {
              return of(new CargoActions.LoadGetCargosError());
            })
          );
      })
    );

    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private cargoService: CargoService,
      ) {
    }    
}