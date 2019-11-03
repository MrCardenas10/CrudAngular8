import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proyecto-create',
  templateUrl: './proyecto-create.component.html',
  styleUrls: ['./proyecto-create.component.css']
})
export class ProyectoCreateComponent implements OnInit {

  proyectos:any;
  proyecto:any;
  rForm:FormGroup;

  constructor(private proyectoService: ProyectoService, private fb: FormBuilder) {}

  ngOnInit() {
    this.formInit();
    this.getProyectos();
    this.limpiar();
  }

  private formInit(): void {
    this.rForm = this.fb.group({
      nombre: ['']
    });
 
  }

  limpiar(){
    this.rForm = this.fb.group({
      nombre: [""]
    });
  }

  get addForm(){return this.rForm.controls;}

  getProyectos(){
    this.proyectoService.getProyectos().subscribe(
      data => this.proyectos = data,
      error => console.log("Error al listar "+error)
    );
  }

  addProyecto(){
    let click = document.getElementById("guardar");
    click.click();
    let proyecto = Object.assign({}, this.rForm.value);
    this.proyectoService.addProyecto(proyecto).subscribe(
      () => console.log("Se registro"),
      error => console.log("No se registro")
    );
    setTimeout(() => {
      this.getProyectos();
    }, 500);
  }


 
}
