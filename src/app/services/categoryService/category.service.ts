import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = "http://localhost:3000/categories"
  constructor(private readonly httpClient : HttpClient) { }

  getAll(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.apiUrl);
  }
}
