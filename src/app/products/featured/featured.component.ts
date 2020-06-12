import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  products: Product[] = [];

  constructor(public productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

}
