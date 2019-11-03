import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CargoService } from '../../services/cargo.service';

@Component({
  selector: 'app-cargo-edit',
  templateUrl: './cargo-edit.component.html',
  styleUrls: ['./cargo-edit.component.css']
})
export class CargoEditComponent implements OnInit {
  cargos:any;
  cargo:any;
  eForm:FormGroup;
  rForm:FormGroup;

  constructor(private cargoService: CargoService, private fb: FormBuilder) {}

  ngOnInit() {
    this.formInit();
    this.getCargos();
  }

  private formInit(): void {
    this.eForm = this.fb.group({
      nombre: ["", [Validators.required, Validators.minLength(4),Validators.maxLength(20)]]
    });
  }


  get updateForm(){return this.eForm.controls;}

  getCargos(){
    this.cargoService.getCargos().subscribe(
      data => this.cargos = data,
      error => console.log("Error al listar "+error)
    );
  }

  cargarDatos(id){
    this.cargoService.getCargo(id).subscribe(
      data => {this.cargo = data;
        this.eForm = this.fb.group({
          nombre: [this.cargo.nombre]
        });
    },
      error => console.log("Error al traer el usuario "+error)
    );
  }

  updateCargo(id){
    let click = document.getElementById("editar");
    click.click();
    let cargo = Object.assign({}, this.eForm.value);
    this.cargoService.updateCargo(cargo, this.cargo.id).subscribe(
      () => console.log("Se registro"),
      error => console.log("No se registro")
    );
    setTimeout(() => {
      this.getCargos();
    }, 500);
  }

}
