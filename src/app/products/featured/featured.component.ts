import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { ProductsService } from '../products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-featured',
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-140%)' }),
        animate('1s')
      ]),
      transition('* => void', [
        animate('1s', style({ transform: 'translateX(140%)' }))
      ])
    ])
  ],
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  popularProducts: Product[] = [];
  newestProducts: Product[] = [];
  currPopularPage = 0;
  currNewestPage = 0;
  productsPerPage = 8;
  productsPerRow = 4;
  popularShortSupply: boolean;
  newestShortSupply: boolean;
  maxPopularProducts: number;
  maxNewestProducts: number;

  private popularProductsSub: Subscription;
  private newestProductsSub: Subscription;

  constructor(public productsService: ProductsService) {}

  ngOnInit() {
    this.maxPopularProducts = this.productsService.getMaxPopularProducts();
    this.maxNewestProducts = this.productsService.getMaxNewestProducts();

    this.popularProductsSub = this.productsService.getPopularProductsUpdateListener()
      .subscribe((products: { popularProducts: Product[] }) => {
        this.popularProducts = products.popularProducts;
        this.popularShortSupply = this.popularProducts.length <= this.productsPerRow;
      });

    this.newestProductsSub = this.productsService.getNewestProductsUpdateListener()
      .subscribe((products: { newestProducts: Product[] }) => {
        this.newestProducts = products.newestProducts;
        this.newestShortSupply = this.newestProducts.length <= this.productsPerRow;
      });

    this.productsService.getPopularProducts(this.currPopularPage, this.productsPerPage);
    this.productsService.getNewestProducts(this.currNewestPage, this.productsPerPage);
  }

  onSlideLeftPopular() {
    this.currPopularPage -= 1;
    this.productsService.getPopularProducts(this.currPopularPage, this.productsPerPage);
  }

  onSlideRightPopular() {
    this.currPopularPage += 1;
    this.productsService.getPopularProducts(this.currPopularPage, this.productsPerPage);
  }

  onSlideLeftNewest() {
    this.currNewestPage -= 1;
    this.productsService.getNewestProducts(this.currNewestPage, this.productsPerPage);
  }

  onSlideRightNewest() {
    this.currNewestPage += 1;
    this.productsService.getNewestProducts(this.currNewestPage, this.productsPerPage);
  }

}
