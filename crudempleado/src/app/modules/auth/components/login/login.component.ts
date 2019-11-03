import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../../shared/services/toast.service';
import { LoadProfile } from '../../store/auth.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rForm:FormGroup;
  
  constructor(
    private toastService: ToastService,
    private router: Router,
    private authService: AuthService,
    private store: Store<any>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formInit();
  }

  private formInit(): void {
    this.rForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      phone: ['',[Validators.required]]
    });
  }

  get addForm(){return this.rForm.controls;}  

  showSuccess() {
    this.toastService.show('¡Bienvido!', { classname: 'bg-success text-light', delay: 1000 });
  }

  showDanger() {
    this.toastService.show("¡Error en las credenciales!", { classname: 'bg-danger text-light', delay: 5000 });
  }

  login(){
    const {email, phone} = this.rForm.value;
    let id;
    if (this.authService.login(email, phone)) {
      id = this.authService.login(email,phone).id;
      this.showSuccess()
      this.store.dispatch(new LoadProfile(id))      
      setTimeout(() => {
        this.router.navigate(['/home'])
      }, 1000)
    }else{
      this.showDanger()
    }
    };
  }
