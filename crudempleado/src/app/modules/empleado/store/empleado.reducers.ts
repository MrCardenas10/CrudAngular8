import * as EmpleadoActions from './empleado.actions';
import { Empleado } from '../interfaces/empleado.interface';
import { EmpleadoState } from '../interfaces/empleado-state.interface';

const initialState: EmpleadoState = {
    employees: [],
    id: null,
    employee: [],
    cargos: [],
    proyectos: []
};

export function employeesReducer(state = initialState, action: EmpleadoActions.EmpleadoActions) {
    switch (action.type) {
        case EmpleadoActions.CREATE_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.payload]
            };

        case EmpleadoActions.TRY_LOAD_EMPLOYEES_CARGOS:
        case EmpleadoActions.LOAD_EMPLOYEES_ERROR_CARGOS:
            return {
                ...state
            };

        case EmpleadoActions.LOAD_EMPLOYEES_SUCCESS_CARGOS:
            return {
                ...state,
                cargos: action.payload
            };
        case EmpleadoActions.TRY_LOAD_EMPLOYEES_PROYECTOS:
        case EmpleadoActions.LOAD_EMPLOYEES_ERROR_PROYECTOS:
            return {
                ...state
            };

        case EmpleadoActions.LOAD_EMPLOYEES_SUCCESS_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload
            };
        case EmpleadoActions.TRY_LOAD_EMPLOYEES:
        case EmpleadoActions.LOAD_EMPLOYEES_ERROR:
            return {
                ...state
            };

        case EmpleadoActions.LOAD_EMPLOYEES_SUCCESS:
            return {
                ...state,
                employees: action.payload
            };
        case EmpleadoActions.TRY_LOAD_EMPLOYEE:
        case EmpleadoActions.LOAD_EMPLOYEE_ERROR:
            return {
                ...state
            };

        case EmpleadoActions.LOAD_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employee: action.payload
            };

        case EmpleadoActions.TRY_DELETE_EMPLOYEE:
            return {
                ...state,
                id: action.payload
            };

        case EmpleadoActions.UPDATE_EMPLOYEE_SUCCESS:
        case EmpleadoActions.UPDATE_EMPLOYEE_ERROR:
            return {
                ...state,
                employee: []
            }

        case EmpleadoActions.DELETE_EMPLOYEE_SUCCESS:
        case EmpleadoActions.DELETE_EMPLOYEE_ERROR:
            return {
                ...state,
                id: null
            }

        default:
            return state;
    }
}