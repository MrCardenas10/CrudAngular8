import { Action } from '@ngrx/store';
import { Proyecto } from './../interfaces/proyecto.interface';

export const TRY_GET_PROYECTOS = '[Proyectos] Try get proyectos';
export const LOAD_PROYECTOS_SUCCESS = '[Proyectos] Load proyectos success';
export const LOAD_PROYECTOS_ERROR = '[Proyectos] Load proyectos error';

export class TryGetProyectos implements Action {
    readonly type = TRY_GET_PROYECTOS;
}

export class LoadProyectosSuccess implements Action {
    readonly type = LOAD_PROYECTOS_SUCCESS;
    constructor(public payload: Proyecto[]) {

    }
}

export class LoadProyectosError implements Action {
    readonly type = LOAD_PROYECTOS_ERROR;
}


export type ProyectoActions =
    TryGetProyectos |
    LoadProyectosSuccess |
    LoadProyectosError;