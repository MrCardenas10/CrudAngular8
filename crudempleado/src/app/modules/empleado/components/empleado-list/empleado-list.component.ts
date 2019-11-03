import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from './../../services/empleado.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TryLoadEmployees, TryDeleteEmployee, CreateEmployee, UpdateEmployee, TryLoadEmployee, TryLoadEmployeesCargos, TryLoadEmployeesProyectos} from '../../store/empleado.actions';
import { Empleado } from '../../interfaces/empleado.interface';
import { Observable } from 'rxjs';
import { getEmployeesListState } from '../../store/empleado.selectors';
import { Router } from '@angular/router';
import { ToastService } from '../../../../shared/services/toast.service';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  users$: Observable<Empleado[]>;
  user: any;
  cargos: any;
  proyectos: any;
  eForm: FormGroup;
  rForm: FormGroup;
  submitted = false;
  constructor( 
    private toastService: ToastService,
    private router: Router,
    private fb: FormBuilder, private store: Store<any>) { }

  ngOnInit() {

    this.getUsers();
  }
  getUsers() {
    this.store.dispatch(new TryLoadEmployees());
    this.users$ = this.store.select(getEmployeesListState);
  }

  showSuccess() {
    this.toastService.show('Empleado eliminado exitosamente', { classname: 'bg-success text-light', delay: 1000 });
  }

  showDanger() {
    this.toastService.show("Error al eliminar el empleado", { classname: 'bg-danger text-light', delay: 1000 });
  }

  getUser(id){
    this.store.dispatch(new TryLoadEmployee(id));
    setTimeout(() => {
      this.router.navigate(['/home/empleado/empleado-edit'])
    }, 500);
  }

  deleteUser(id){
    this.store.dispatch(new TryDeleteEmployee(id));
      this.showSuccess();
      setTimeout(() => {
        this.getUsers();
      }, 1000);
  }
}
