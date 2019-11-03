import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { Observable } from 'rxjs';
import { Proyecto } from '../../interfaces/proyecto.interface';
import { TryGetProyectos } from '../../store/proyecto.actions';
import { Store } from '@ngrx/store';
import { getProyectosListState } from '../../store/proyecto.selectors';

@Component({
  selector: 'app-proyecto-list',
  templateUrl: './proyecto-list.component.html',
  styleUrls: ['./proyecto-list.component.css']
})
export class ProyectoListComponent implements OnInit {

  proyectos$: Observable<Proyecto[]>;
  proyecto: any;
  constructor(private proyectoService: ProyectoService, private store: Store<any>) { }

  ngOnInit() {
    this.getProyectos();
  }

  getProyectos() {
    this.proyectos$ = this.store.select(getProyectosListState);
  }

  deleteProyecto(id) {
    this.proyectoService.deleteProyecto(id).subscribe(
      () => console.log("Se elimino"),
      error => console.log("No se elimino " + error)
    );
    setTimeout(() => {
      this.getProyectos();
    }, 500);
  }

}
