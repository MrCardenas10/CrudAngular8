import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectoRoutingModule } from './proyecto-routing.module';
import { ProyectoCreateComponent } from './components/proyecto-create/proyecto-create.component';
import { ProyectoEditComponent } from './components/proyecto-edit/proyecto-edit.component';
import { ProyectoListComponent } from './components/proyecto-list/proyecto-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ProyectoService } from './services/proyecto.service';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../../core/core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProyectoEffects } from './store/proyecto.effects';
import { proyectoReducers } from './store/proyecto.reducers';

@NgModule({
  declarations: [
    ProyectoCreateComponent,
    ProyectoEditComponent,
    ProyectoListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forFeature('proyectos', proyectoReducers),
    EffectsModule.forFeature([ProyectoEffects]),
    ProyectoRoutingModule
  ],
  providers: [
    ProyectoService
  ]
})
export class ProyectoModule { }
