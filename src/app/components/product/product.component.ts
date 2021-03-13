import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';
import { ProductService } from 'src/app/services/productService/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(private alertifyService: AlertifyService, private productService: ProductService) {}
  products: Product[] = [];
  filterText: string = '';

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.productService.getAll().subscribe(response=>{
      this.products = response;
    })
  }

  addToCart(product: Product){
    this.alertifyService.success(`${product.name} added to cart`)
  }
}
