import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private toastService: ToastService) { }

  ngOnInit() {
  }

  showSuccess() {
    this.toastService.show('Gracias por utilizar nuestros servicios', { classname: 'bg-success text-light', delay: 1000 });
  }

  showDanger() {
    this.toastService.show("Error al cerrar sesion", { classname: 'bg-danger text-light', delay: 1000 });
  }

  logout() {
    this.authService.removeToken() ?
      setTimeout(() => {
        this.showSuccess()
        this.router.navigate(['/login'])
      }, 1000) :
      this.showDanger();
  }

}
