import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { AlertifyService } from './services/alertify/alertify.service';
import { ProductAddForms1Component } from './components/product/product-add-forms1/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './components/product/product-add-forms2/product-add-forms2.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './models/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    CategoryComponent,
    ProductFilterPipe,
    ProductAddForms1Component,
    ProductAddForms2Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AlertifyService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
