import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { ProductModel } from 'src/app/models/productModel';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';
import { CategoryService } from 'src/app/services/categoryService/category.service';
import { ProductService } from 'src/app/services/productService/product.service';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css']
})
export class ProductAddForms2Component implements OnInit {

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService, private productService: ProductService, private alertify: AlertifyService) { }

  model:ProductModel = new ProductModel();
  categories: Category[];
  productAddForm: FormGroup;
  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      categoryId: ['', Validators.required],
      price: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.createProductAddForm();
    this.categoryService.getAll().subscribe(response=>{
      this.categories = response
    })
  }

  add(){
    if(this.productAddForm.valid){
      this.model = Object.assign({}, this.productAddForm.value)
    }
    this.productService.addProduct(this.model).subscribe(response=>{
      this.alertify.success(`${response.name} added.`)
    })

  }

}
