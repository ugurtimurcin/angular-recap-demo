import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/categoryService/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  categories: Category[] = [];
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.categoryService.getAll().subscribe(response=>{
      this.categories = response
    })
  }

}
