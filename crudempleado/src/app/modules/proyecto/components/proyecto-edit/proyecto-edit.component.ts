import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proyecto-edit',
  templateUrl: './proyecto-edit.component.html',
  styleUrls: ['./proyecto-edit.component.css']
})
export class ProyectoEditComponent implements OnInit {

  proyectos:any;
  proyecto:any;
  eForm:FormGroup;

  constructor(private proyectoService: ProyectoService, private fb: FormBuilder) {}

  ngOnInit() {
    this.formInit();
  }

  private formInit(): void {
    this.eForm = this.fb.group({
      nombre: [""]
    });
  }


  get updateForm(){return this.eForm.controls;}

  cargarDatos(id){
    this.proyectoService.getProyecto(id).subscribe(
      data => {this.proyecto = data;
        console.log(data)
        this.eForm = this.fb.group({
          nombre: [this.proyecto.nombre]
        });
    },
      error => console.log("Error al traer el proyecto "+error)
    );
  }

  updateProyecto(){
    let click = document.getElementById("editar");
    click.click();
    let proyecto = Object.assign({}, this.eForm.value);
    this.proyectoService.updateProyecto(proyecto, this.proyecto.id).subscribe(
      () => console.log("Se registro"),
      error => console.log("No se registro")
    );
   
  }
}
