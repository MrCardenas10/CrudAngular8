import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastGlobalComponent } from './components/toast-global/toast-global.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToastsContainer } from './components/toast-global/toast-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './services/loader.service';

@NgModule({
  declarations: [
    ToastGlobalComponent,
    ToastsContainer,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    MatProgressSpinnerModule
  ], 
  exports: [ToastsContainer, LoaderComponent],
  providers: [LoaderService],
})
export class SharedModule { }
