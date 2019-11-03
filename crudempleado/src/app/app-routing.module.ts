
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import { PagenotfoundComponent } from './core/components/pagenotfound/pagenotfound.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { LoggedInGuard } from './shared/guards/logged-in.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { IsLoggedGuard } from './core/guards/is-logged-in.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path:'home', component: HomeComponent, canActivateChild:[AuthGuard],
    children:[
      { 
        path:'empleado',
        loadChildren: () => import('./modules/empleado/empleado.module').then(m => m.EmpleadoModule)
      },
      {
        path:'cargo',
        loadChildren: () => import('./modules/cargo/cargo.module').then(m => m.CargoModule)
      },
      {
        path:'proyecto',
        loadChildren: () => import('./modules/proyecto/proyecto.module').then(m => m.ProyectoModule)
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[LoggedInGuard]
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
