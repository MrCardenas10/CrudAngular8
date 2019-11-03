import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectoCreateComponent } from './components/proyecto-create/proyecto-create.component';
import { ProyectoEditComponent } from './components/proyecto-edit/proyecto-edit.component';
import { ProyectoListComponent } from './components/proyecto-list/proyecto-list.component';

const routes: Routes = [
  {
    path:'proyecto-create', component:ProyectoCreateComponent
  },
  {
    path:'proyecto-edit', component: ProyectoEditComponent
  },
  {
    path:'proyecto-list', component: ProyectoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectoRoutingModule { }
