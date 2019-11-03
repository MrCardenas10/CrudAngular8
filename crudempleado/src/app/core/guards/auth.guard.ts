// angular core
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, CanLoad, CanActivateChild, UrlTree } from '@angular/router';

// dependencies
import { Observable } from 'rxjs';

// services
import { AuthService } from '../services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { TryGetCargos } from '../../modules/cargo/store/cargo.actions';
import { TryGetProyectos } from '../../modules/proyecto/store/proyecto.actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(private store: Store<any>,private authService: AuthService, private router: Router) {
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    if (this.authService.isAuthenticated()) {
      this.store.dispatch(new TryGetCargos());
      this.store.dispatch(new TryGetProyectos());
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
