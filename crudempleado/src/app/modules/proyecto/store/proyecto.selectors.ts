import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProyectos = (state: any) => state['proyectos'];

export const getProyectosState = createFeatureSelector<any>('proyectos');

export const getProyectosListState = createSelector(getProyectosState, getProyectos)
