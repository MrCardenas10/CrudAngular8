// dependencies
import { Action } from '@ngrx/store';
import { Empleado } from '../../empleado/interfaces/empleado.interface';

export const LOGOUT = '[Auth] Logout user profile';
export const LOAD_USER_PROFILE = '[Auth] Load user profile';
export const LOAD_USER_PROFILE_SUCCESS = '[Auth] Load user profile success';
export const LOAD_USER_PROFILE_ERROR = '[Auth] Load user profile error';


export class LoadProfile implements Action {
  readonly type = LOAD_USER_PROFILE;

  constructor(public payload: number) {
  }
}

export class LoadProfileSuccess implements Action {
  readonly type = LOAD_USER_PROFILE_SUCCESS;

  constructor(public payload: Empleado[]) {
  }
}

export class LoadProfileError implements Action {
  readonly type = LOAD_USER_PROFILE_ERROR;

  constructor() {
  }
}

export class Logout implements Action {
  readonly type = LOGOUT;

  constructor() {
  }
}

export type AuthActions = LoadProfile | LoadProfileSuccess | LoadProfileError | Logout;
