import { Component, OnInit } from '@angular/core';
import { CargoService } from '../../services/cargo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cargo-create',
  templateUrl: './cargo-create.component.html',
  styleUrls: ['./cargo-create.component.css']
})
export class CargoCreateComponent implements OnInit {

  rForm:FormGroup;

  constructor(private cargoService: CargoService, private fb: FormBuilder) {}

  ngOnInit() {
    this.formInit();
    this.limpiar();
  }

  private formInit(): void {
    this.rForm = this.fb.group({
      nombre: ['',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]]
    });
  }

  limpiar(){
    this.rForm = this.fb.group({
      nombre: [""]
    });
  }

  get addForm(){return this.rForm.controls;}


  addCargo(){
    let click = document.getElementById("guardar");
    click.click();
    let cargo = Object.assign({}, this.rForm.value);
    this.cargoService.addCargo(cargo).subscribe(
      () => console.log("Se registro"),
      error => console.log("No se registro")
    );
    
  }

}
