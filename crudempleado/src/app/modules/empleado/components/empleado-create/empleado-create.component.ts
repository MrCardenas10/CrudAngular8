import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from './../../services/empleado.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TryGetCargos } from './../../../cargo/store/cargo.actions';
import { Store } from '@ngrx/store';
import { CreateEmployee, TryLoadEmployeesCargos, TryLoadEmployeesProyectos } from '../../store/empleado.actions';
import { Observable } from 'rxjs';
import { getCargosListState } from './../../../cargo/store/cargo.selectors';
import { Cargo } from '../../../cargo/interfaces/cargo.interface';
import { getProyectosListState } from './../../../proyecto/store/proyecto.selectors';
import { Proyecto } from '../../../proyecto/interfaces/proyecto.interface';
import { TryGetProyectos } from '../../../proyecto/store/proyecto.actions';
import { Router } from '@angular/router';
import { getCargosEmployeesState, getProyectosEmployeesState } from '../../store/empleado.selectors';
import { ToastService } from '../../../../shared/services/toast.service';

@Component({
  selector: 'app-empleado-create',
  templateUrl: './empleado-create.component.html',
  styleUrls: ['./empleado-create.component.css']
})
export class EmpleadoCreateComponent implements OnInit {
  cargos$: Observable<Cargo[]>;
  proyectos$: Observable<Proyecto[]>;
  eForm: FormGroup;
  rForm: FormGroup;
  submitted = false;
  constructor(
    private toastService: ToastService,
    private router: Router,
    private empleadoService: EmpleadoService,
    private fb: FormBuilder, private store: Store<any>) { }

  ngOnInit() {
    // this.store.dispatch(new TryGetCargos());
    // this.store.select(getCargosListState).subscribe(
    //   res => {
    //     this.cargos = res;
    //   },
    //   error => console.log("Error al traer los cargos "+error)
    // )
    this.getCargos();
    this.getProyectos();
    this.formInit();
  }

  private formInit(): void {
    this.rForm = this.fb.group({
      // id:['',Validators.required],
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      email: ["", [Validators.email, Validators.minLength(5), Validators.required]],
      phone: ["", [Validators.minLength(6), Validators.maxLength(12), Validators.required]],
      idCargo: ["", Validators.required],
      idProyecto: ["", Validators.required]
    });

    this.eForm = this.fb.group({
      name: ["", [Validators.minLength(3), Validators.maxLength(10)]],
      email: ["", [Validators.email, Validators.minLength(5)]],
      phone: ["", [Validators.minLength(6), Validators.maxLength(10)]],
      idCargo: ["", Validators.required],
      idProyecto: ["", Validators.required]
    });
  }

  get addForm() { return this.rForm.controls; }
  get updateForm() { return this.eForm.controls; }

  showSuccess() {
    this.toastService.show('Se registro exitosamente', { classname: 'bg-success text-light', delay: 5000 });
  }

  showDanger() {
    this.toastService.show("Error en el registro", { classname: 'bg-danger text-light', delay: 5000 });
  }

  addUser() {
    let user = Object.assign({}, this.rForm.value);
    this.store.dispatch(new CreateEmployee(user));
    this.showSuccess();
    setTimeout(() => {
      this.router.navigate(['/home/empleado/empleado-list']);
    }, 1000);
  }

  getCargos() {
    this.cargos$ = this.store.select(getCargosListState);
  }

  getProyectos() {
    this.proyectos$ = this.store.select(getProyectosListState);
  }



  // updateUser(id) {
  //   let click = document.getElementById("editar");
  //   click.click();
  //   let user = Object.assign({}, this.eForm.value);
  //   this.empleadoService.updateUser(user, this.user.id).subscribe(
  //     () => console.log("Se registro"),
  //     error => console.log("No se registro")
  //   );
  //   setTimeout(() => {
  //     this.getUsers();
  //   }, 500);
  // }

}
