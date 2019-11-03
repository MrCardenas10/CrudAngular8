import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargoCreateComponent } from './components/cargo-create/cargo-create.component';
import { CargoEditComponent } from './components/cargo-edit/cargo-edit.component';
import { CargoListComponent } from './components/cargo-list/cargo-list.component';

const routes: Routes = [
  {
    path:'cargo-create', component:CargoCreateComponent
  },
  {
    path:'cargo-edit', component:CargoEditComponent
  },
  {
    path:'cargo-list', component:CargoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargoRoutingModule { }
