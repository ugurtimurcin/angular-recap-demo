import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'http://localhost:3000/products'
  constructor(private httpClient: HttpClient) { }

  getAll(categoryId: number): Observable<Product[]>{
    return this.httpClient.get<Product[]>(categoryId ? this.apiUrl + '?categoryId=' + categoryId : this.apiUrl);
  }
}
