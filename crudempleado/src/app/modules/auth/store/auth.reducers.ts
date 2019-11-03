// depepdencies
import { createFeatureSelector, createSelector } from '@ngrx/store';

// ngrx
import { AuthActions,LOAD_USER_PROFILE, LOAD_USER_PROFILE_SUCCESS, LOAD_USER_PROFILE_ERROR } from './auth.actions';

// interfaces
import { AuthState } from '../interfaces/auth-state.interface';

const initialState: AuthState = {
  userProfile: [],
  error: null
};

export function authReducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case LOAD_USER_PROFILE_ERROR:
      return {
        ...state
      };

    case LOAD_USER_PROFILE:
    return{
      ...state,
      id: action.payload
    }

    case LOAD_USER_PROFILE_SUCCESS: 
      return {
        ...state,
        userProfile: action.payload,
        id: null
      };
    default:
      return state;
  }
}

export const getAuthState = createFeatureSelector<AuthState>('auth');

export const getUserProfile = createSelector(getAuthState, state => state.userProfile);
