import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// dependencies
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// modules
import { SharedModule } from './../../shared/shared.module';

// components
import { LoginComponent } from './components/login/login.component';

// ngrx
import { authReducer } from './store/auth.reducers';
import { AuthEffects } from './store/auth.effects'

@NgModule({
  declarations: [
    LoginComponent    
  ],
  imports: [
    CommonModule,    
    FormsModule, 
    ReactiveFormsModule,
    EffectsModule.forFeature([
      AuthEffects
    ]),
    StoreModule.forFeature('auth', authReducer),
    SharedModule
  ]
})
export class AuthModule { }
