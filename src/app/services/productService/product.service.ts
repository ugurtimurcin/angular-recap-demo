import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductModel } from 'src/app/models/productModel';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'http://localhost:3000/products'
  constructor(private httpClient: HttpClient) { }

  addProduct(product: ProductModel): Observable<ProductModel>{
    return this.httpClient.post<ProductModel>(this.apiUrl, product)
  }

  getAll(categoryId: number): Observable<Product[]>{
    return this.httpClient.get<Product[]>(categoryId ? this.apiUrl + '?categoryId=' + categoryId : this.apiUrl);
  }
}
