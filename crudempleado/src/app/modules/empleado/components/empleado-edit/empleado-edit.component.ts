// angular core
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// servicios
import { EmpleadoService } from './../../services/empleado.service';

// ngrx
import { Store } from '@ngrx/store';
import { getEmployeeState, getProyectosEmployeesState, getCargosEmployeesState } from '../../store/empleado.selectors';
import { getProyectosListState } from '../../../proyecto/store/proyecto.selectors';
import { getCargosListState } from '../../../cargo/store/cargo.selectors';

// actions
import { UpdateEmployee, TryLoadEmployeesProyectos, TryLoadEmployeesCargos } from '../../store/empleado.actions';

// rxjs
import { Observable } from 'rxjs';

// interfaces
import { Cargo } from '../../../cargo/interfaces/cargo.interface';
import { Proyecto } from '../../../proyecto/interfaces/proyecto.interface';


// dependencias
import { NotifyService } from '../../../../shared/services/notify.service';
import { ToastService } from '../../../../shared/services/toast.service';

@Component({
  selector: 'app-empleado-edit',
  templateUrl: './empleado-edit.component.html',
  styleUrls: ['./empleado-edit.component.css']
}) 
export class EmpleadoEditComponent implements OnInit {
  alerta;
  user: any;
  cargos$: Observable<Cargo[]>;
  proyectos$: Observable<Proyecto[]>;
  eForm: FormGroup;
  submitted = false;
  constructor(
    private toastService: ToastService,
    private router: Router,
    private store: Store<any>,
    private empleadoService: EmpleadoService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.alerta=false;
    this.formInit();
    this.getCargos();
    this.getProyectos();
  }

  formInit() {
    this.store.select(getEmployeeState).subscribe(
      res => {
        this.user = res;
      }
    );
    console.log(this.user.name);
    this.eForm = this.fb.group({
      name: [this.user.name, [Validators.minLength(6), Validators.maxLength(12)]],
      email: [this.user.email, [Validators.email, Validators.minLength(5)]],
      phone: [this.user.phone, [Validators.minLength(6), Validators.maxLength(12)]],
      idCargo: [this.user.idCargo, Validators.required],
      idProyecto: [this.user.idProyecto, Validators.required]
    });
  }

  get updateForm() { return this.eForm.controls; }

  getCargos() {
    this.cargos$ = this.store.select(getCargosListState);
  }

  getProyectos() {
    this.proyectos$ = this.store.select(getProyectosListState);
  }

  // cargarDatos() {
  //  this.conte = this.store.select(getEmployeeListState);
  //       this.eForm = this.fb.group({
  //         name: [this.conte.name, [Validators.minLength(6), Validators.maxLength(12), Validators.required]],
  //         email: [this.conte.email, [Validators.email, Validators.minLength(5), Validators.required]],
  //         phone: [this.conte.phone, [Validators.minLength(6), Validators.maxLength(12), Validators.required]],
  //         idCargo: [this.conte.idCargo, [Validators.required]],
  //         idProyecto: [this.conte.idProyecto, [Validators.required]]
  //       });
  // }

  showSuccess() {
    this.toastService.show('Se modifico exitosamente', { classname: 'bg-success text-light', delay: 1000 });
  }

  showDanger() {
    this.toastService.show("Error al modificar el empleado", { classname: 'bg-danger text-light', delay: 1000 });
  }

  updateUser() {
    let Empleado = Object.assign({}, this.eForm.value);
    let id = this.user.id;
    this.store.dispatch(new UpdateEmployee({ id, user: Empleado }));
      this.showSuccess();
    setTimeout(() => {
      this.router.navigate(['/home/empleado/empleado-list']);
    }, 1000);
  }

}
