import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoRoutingModule } from './empleado-routing.module';
import { EmpleadoCreateComponent } from './components/empleado-create/empleado-create.component';
import { EmpleadoEditComponent } from './components/empleado-edit/empleado-edit.component';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmpleadoService } from './services/empleado.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EmployeesEffects } from './store/empleado.effects';
import { employeesReducer } from './store/empleado.reducers';
import { SharedModule } from '../../shared/shared.module';
import { CargoModule } from '../cargo/cargo.module';
import { ProyectoModule } from '../proyecto/proyecto.module';

@NgModule({
  declarations: [
    EmpleadoCreateComponent,
    EmpleadoEditComponent,
    EmpleadoListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CargoModule,
    ProyectoModule,
    StoreModule.forFeature('empleados', employeesReducer),
    EffectsModule.forFeature([EmployeesEffects]),
    EmpleadoRoutingModule
  ],
  providers:[
    EmpleadoService
  ]
})
export class EmpleadoModule { }
