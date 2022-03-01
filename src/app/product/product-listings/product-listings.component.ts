import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.css']
})
export class ProductListComponent implements OnInit {

  products: any;

  constructor() { }

  ngOnInit() {
    this.products = products;
  }

}
