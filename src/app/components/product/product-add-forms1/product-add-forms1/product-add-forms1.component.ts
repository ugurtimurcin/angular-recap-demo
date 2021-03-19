import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ProductModel } from 'src/app/models/productModel';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';
import { CategoryService } from 'src/app/services/categoryService/category.service';
import { ProductService } from 'src/app/services/productService/product.service';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css']
})
export class ProductAddForms1Component implements OnInit {

  model:ProductModel = new ProductModel();
  categories: Category[];
  constructor(private categoryService: CategoryService, private productService: ProductService, private alertifyService: AlertifyService) { }


  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(){
    this.categoryService.getAll().subscribe(response=>{
      this.categories = response
    })
  }

  addProduct(form: NgForm){
    this.productService.addProduct(this.model).subscribe(response=>{
      this.alertifyService.success(`${response.name} eklendi`)
    })
  }

}
