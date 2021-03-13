import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';
import { ProductService } from 'src/app/services/productService/product.service';
import { tap, catchError } from 'rxjs/operators'
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(private alertifyService: AlertifyService, private productService: ProductService, private activatedRoute: ActivatedRoute) {}
  products: Product[] = [];
  filterText: string = '';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getAll(params["categoryId"]);
    })
    
  }

  getAll(categoryId: number){
    this.productService.getAll(categoryId).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    ).subscribe(response=>{
      this.products = response;
    })
  }

  addToCart(product: Product){
    this.alertifyService.success(`${product.name} added to cart`)
  }

  handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      errorMessage = 'An error occurs ' + err.error.message;
    }else{
      errorMessage = 'System error';
    }

    return throwError(errorMessage);
  }
}
