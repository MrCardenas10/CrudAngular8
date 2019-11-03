import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargoRoutingModule } from './cargo-routing.module';
import { CargoCreateComponent } from './components/cargo-create/cargo-create.component';
import { CargoEditComponent } from './components/cargo-edit/cargo-edit.component';
import { CargoListComponent } from './components/cargo-list/cargo-list.component';
import { CargoService } from './services/cargo.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { cargosReducer } from './store/cargo.reducers';
import { CargosEffects } from './store/cargo.effects';

@NgModule({
  declarations: [
    CargoCreateComponent,
    CargoEditComponent,
    CargoListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    CoreModule,
    StoreModule.forFeature('cargos', cargosReducer),
    EffectsModule.forFeature([CargosEffects]),
    CargoRoutingModule
  ],
  providers:[
    CargoService
  ]
})
export class CargoModule { }
