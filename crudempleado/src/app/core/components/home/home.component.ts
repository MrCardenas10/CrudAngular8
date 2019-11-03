import { Component, OnInit } from '@angular/core';
import { TryGetCargos } from '../../../modules/cargo/store/cargo.actions';
import { TryGetProyectos } from '../../../modules/proyecto/store/proyecto.actions';
import { Store } from '@ngrx/store';
import { getUserProfile } from '../../../modules/auth/store/auth.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new TryGetCargos());
    this.store.dispatch(new TryGetProyectos());
    this.store.select(getUserProfile)
  }




}
