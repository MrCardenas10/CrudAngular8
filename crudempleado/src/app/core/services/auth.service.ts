// angular core
import { Injectable } from '@angular/core';
// dependencies
import { Observable } from 'rxjs';
// interfaces
import { EmpleadoProfile } from './../../modules/auth/interfaces/empleado-profile.interface';
import { LoadProfile } from '../../modules/auth/store/auth.actions';
import { Store } from '@ngrx/store';


export const TOKEN_KEY = 'crewAppToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "http://localhost:3000";  
  constructor(private store: Store<any>) {
  }

  static parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  login(email:string, phone:string){
    let token;
    let id;
    if (email === "cardenasestiveninea@gmail.com" && phone === "123123123") {
      token= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjMzOTQxNjEsImV4cCI6MTU5NDkzMDE2MSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImlkIjoiMyIsIm5hbWUiOiJFc3RpdmVuIiwicGhvbmUiOiIxMjMxMjMxMjMiLCJpZENhcmdvIjoiMyIsImlkUHJveWVjdG8iOiIxIn0.6pQiPboaXd-7TOEMPQSqIM_s-2ZjIncUTbrvjzl_8wjcawU-Qy6W_HJnZG09bzDf"
      localStorage.setItem('token', token);
      id = 3;
      return {
        token,
        id
      };
    }
    else{
      return token;
    }
  }

  removeToken() {
    localStorage.removeItem('token');
    return true;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getDecodedToken() {
    return AuthService.parseJwt(this.getToken());
  }

  isAuthenticated() {
    const decodedToken = this.getDecodedToken();

    if (!decodedToken) {
      return false;
    }

    const expires = new Date(decodedToken.exp * 1000);

    return expires.getTime() > Date.now();
  }
}
