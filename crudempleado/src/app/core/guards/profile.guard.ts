// // angular core
// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

// // dependencies
// import { take, filter, tap, distinctUntilChanged, map } from 'rxjs/operators';
// import { Observable } from 'rxjs';
// import { Store } from '@ngrx/store';

// // ngrx
// import { getUserProfile } from './../../modules/auth/store/auth.reducers';
// import { LoadProfile } from './../../modules/auth/store/auth.actions';

// @Injectable()
// export class ProfileGuard implements CanActivate {
//   constructor(private store: Store<any>) {
//   }

//   // canActivate(next: ActivatedRouteSnapshot,
//   //             state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//   //   return this.checkProfile();
//   // }

//   // checkProfile() {
//   //   return this.store.select(getUserProfile).pipe(
//   //     map(profile => !!profile),
//   //     distinctUntilChanged(),
//   //     tap((isLoaded) => {
//   //       // this if will run only once because of the distinctUntilChanged
//   //       if (!isLoaded) {
//   //         this.store.dispatch(new LoadProfile());
//   //       } else {
//   //         console.log("Problemas para cargar la informacion del perfil")
//   //       }
//   //     }),
//   //     filter(isLoaded => isLoaded),
//   //     take(1));
//   // }
// }
