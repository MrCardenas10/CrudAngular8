import { Action } from '@ngrx/store';
import { Cargo } from './../interfaces/cargo.interface';

export const TRY_GET_CARGOS = "[Cargos] Try get cargos";
export const LOAD_GET_CARGOS_SUCCESS = "[Cargos] Load get cargos success";
export const LOAD_GET_CARGOS_ERROR = "[Cargos] Load get cargos error";

export class TryGetCargos implements Action{
    readonly type = TRY_GET_CARGOS;
}

export class LoadGetCargosSuccess implements Action{
    readonly type = LOAD_GET_CARGOS_SUCCESS;
    constructor(public payload:Cargo[]){}
}

export class LoadGetCargosError implements Action{
    readonly type = LOAD_GET_CARGOS_ERROR;
}


export type CargoActions =
    TryGetCargos|
    LoadGetCargosSuccess|
    LoadGetCargosError;
