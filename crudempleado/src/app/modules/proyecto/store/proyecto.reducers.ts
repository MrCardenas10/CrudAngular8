import * as ProyectoActions from './proyecto.actions';
import { Store } from '@ngrx/store';
import { ProyectoState } from '../interfaces/proyecto-state.interface';

const initialState: ProyectoState = {
    proyectos: []
}

export function proyectoReducers(state = initialState, actions: ProyectoActions.ProyectoActions) {
    switch (actions.type) {
        case ProyectoActions.TRY_GET_PROYECTOS:
        case ProyectoActions.LOAD_PROYECTOS_ERROR:
            return {
                ...state
            }
        case ProyectoActions.LOAD_PROYECTOS_SUCCESS:
            return {
                ...state,
                proyectos: actions.payload
            }
        default:
            return state;
    }
}