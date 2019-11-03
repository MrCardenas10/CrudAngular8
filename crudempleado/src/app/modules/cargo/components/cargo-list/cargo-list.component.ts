import { Component, OnInit } from '@angular/core';
import { CargoService } from '../../services/cargo.service';
import { Observable } from 'rxjs';
import { Cargo } from './../../interfaces/cargo.interface';
import { TryGetCargos } from '../../store/cargo.actions';
import { Store } from '@ngrx/store';
import { LoadEmployeesSuccess } from '../../../empleado/store/empleado.actions';
import { getCargosListState } from '../../store/cargo.selectors';
import { TryGetProyectos } from '../../../proyecto/store/proyecto.actions';
import { getProyectosListState } from '../../../proyecto/store/proyecto.selectors';
import { Proyecto } from '../../../proyecto/interfaces/proyecto.interface';

@Component({
  selector: 'app-cargo-list',
  templateUrl: './cargo-list.component.html',
  styleUrls: ['./cargo-list.component.css']
})
export class CargoListComponent implements OnInit {

  cargos$:Observable<Cargo[]>;
  proyectos$: Observable<Proyecto[]>;
  cargo:any;

  constructor(private cargoService: CargoService, private store: Store<any>) {}

  ngOnInit() {
    this.getCargos();
  }

  getCargos(){
    this.cargos$ = this.store.select(getCargosListState);
  }

  deleteCargo(id){
    this.cargoService.deleteCargo(id).subscribe(
      () => console.log("Se elimino"),
      error => console.log("No se elimino "+error)
    );
    setTimeout(() => {
      this.getCargos();
    }, 500);
  }

}
