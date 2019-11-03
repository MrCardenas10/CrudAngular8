import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getCargos = (state: any) => state['cargos'];

export const getCargosState = createFeatureSelector<any>('cargos');

export const getCargosListState = createSelector(getCargosState, getCargos);
