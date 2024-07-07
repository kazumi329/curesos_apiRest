import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListaddEditComponent } from './components/listadd-edit/listadd-edit.component';
import { ReactiveFormsModule } from '@angular/forms';  // Importa ReactiveFormsModule
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
   
    HttpClientModule,
    RouterOutlet,
    NavbarComponent,
    ListProductsComponent,
    ListaddEditComponent,
    ReactiveFormsModule  // Añade ReactiveFormsModule al array de imports
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
}
