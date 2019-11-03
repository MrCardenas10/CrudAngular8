import { EmpleadoProfile } from './empleado-profile.interface';
import { Empleado } from '../../empleado/interfaces/empleado.interface';

export interface AuthState{
    userProfile: Empleado[];
    error: string;
}