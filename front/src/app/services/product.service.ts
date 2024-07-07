import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private myAppUrl:string;
  private myApiUrl: string;


  constructor(private http:HttpClient) { 

    this.myAppUrl = environment.endpoint;

    this.myApiUrl= '/api/cursos/'
  }

  // getListCursos():Observable<Product[]> {
  //   return this.http.get<Product[]>(this.myAppUrl+this.myApiUrl);

  // }

}
