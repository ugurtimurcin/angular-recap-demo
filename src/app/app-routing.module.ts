import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductAddForms1Component } from './components/product/product-add-forms1/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './components/product/product-add-forms2/product-add-forms2.component';
import { ProductComponent } from './components/product/product.component';
import { LoginGuard } from './models/login.guard';

const routes: Routes = [
  {path: 'products', component: ProductComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path:'products-add-1', component: ProductAddForms1Component, canActivate:[LoginGuard]},
  {path:'products-add-2', component: ProductAddForms2Component},
  {path:'products/category/:categoryId', component: ProductComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
