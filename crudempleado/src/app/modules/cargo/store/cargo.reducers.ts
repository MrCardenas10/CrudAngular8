import * as CargoActions from './cargo.actions';
import { CargoState } from './../interfaces/cargo-state.interface';

const initialState: CargoState = {
    cargos: [],
};

export function cargosReducer(state = initialState, actions:CargoActions.CargoActions){
    switch (actions.type) {
        case CargoActions.TRY_GET_CARGOS:
        case CargoActions.LOAD_GET_CARGOS_ERROR:
            return {
                ...state
            }
        case CargoActions.LOAD_GET_CARGOS_SUCCESS:
        return {
            ...state,
            cargos: actions.payload
        }
        default:
            return state;
    }
}