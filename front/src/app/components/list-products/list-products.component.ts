import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../../services/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [
    HttpClientModule,
    ListProductsComponent,
    CommonModule,
    RouterLink],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit {

  HttpClient = inject(HttpClient);
  data:any[]=[];
  
 ngOnInit(): void {
  this.fetchData()
     
 }

  fetchData(){
    this.HttpClient.get('http://localhost:3000/api/cursos').subscribe((data:any)=>{console.log(data);
    })
  }

}// aqui acaba el todo
