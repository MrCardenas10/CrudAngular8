import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadoCreateComponent } from './components/empleado-create/empleado-create.component';
import { EmpleadoEditComponent } from './components/empleado-edit/empleado-edit.component';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';

const routes: Routes = [
  {
    path:'empleado-create', component:EmpleadoCreateComponent
  },
  {
    path:'empleado-edit', component:EmpleadoEditComponent
  },
  {
    path:'empleado-list', component:EmpleadoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoRoutingModule { }
