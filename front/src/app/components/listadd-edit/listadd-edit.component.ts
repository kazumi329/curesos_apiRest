import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';  // Importa ReactiveFormsModule
import { log } from 'console';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/products';



@Component({
  selector: 'app-listadd-edit',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule  // Añade ReactiveFormsModule aquí
  ],
  templateUrl: './listadd-edit.component.html',
  styleUrls: ['./listadd-edit.component.css']
})
export class ListaddEditComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      dia: ['', [Validators.required, Validators.maxLength(9)]],
      curso: ['', Validators.required],
      descripcion: ['', Validators.required],
      profesor: ['', Validators.required],
      hora: ['', Validators.required],
      inscritos: ['', Validators.required]
    });
  }
  agregado(){
    // console.log(this.form);
    

     const product: Product = {
      Dia:this.form.value.dia,
      Curso:this.form.value.curso,
      Descripcion:this.form.value.descripcion,
      Profesor:this.form.value.profesor,
      Hora:this.form.value.hora,
      Inscritos:this.form.value.hora

     }

     console.log(product);
     

    
  }
}
