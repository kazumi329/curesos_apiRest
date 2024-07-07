import { Routes } from '@angular/router';
import path from 'path';
import { ListaddEditComponent } from './components/listadd-edit/listadd-edit.component';
import { ListProductsComponent } from './components/list-products/list-products.component';

export const routes: Routes = [

    {path:'', component: ListProductsComponent},
    {path: 'add', component: ListaddEditComponent},
    {path:'edit/:id',component:ListaddEditComponent},
    {path:'**', redirectTo: '',pathMatch:'full'}




];
