import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { ProductsService } from '../products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-featured',
  animations: [
    trigger('slidePrev', [
      state('left', style({ transform: 'translateX(-110%)' })),
      state('middle', style({ transform: 'translateX(0)' })),
      transition('left => middle', [
        animate('0.6s ease-out')
      ])
    ]),
    trigger('slideCurr', [
      state('left', style({ transform: 'translateX(-110%)' })),
      state('middle', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(110%)' })),
      transition('middle => left', [
        animate('0.6s ease-out')
      ]),
      transition('middle => right', [
        animate('0.6s ease-out')
      ])
    ]),
    trigger('slideNext', [
      state('middle', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(110%)' })),
      transition('right => middle', [
        animate('0.6s ease-out')
      ])
    ]),
  ],
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  productsPerPage = 8;
  productsPerRow = 4;
  maxPopularProducts: number;
  maxNewestProducts: number;

  private popularProductsSub: Subscription;
  private newestProductsSub: Subscription;

  prevPopularProducts: Product[] = [];
  prevNewestProducts: Product[] = [];
  currPopularProducts: Product[] = [];
  currNewestProducts: Product[] = [];
  nextPopularProducts: Product[] = [];
  nextNewestProducts: Product[] = [];

  currPopularPage = 0;
  currNewestPage = 0;

  popularSlideLeft = false;
  popularSlideRight = false;
  newestSlideLeft = false;
  newestSlideRight = false;
  currMoving = false;
  currMoveRight: boolean;
  popularShortSupply: boolean;
  newestShortSupply: boolean;

  constructor(public productsService: ProductsService) {}

  ngOnInit() {
    this.maxPopularProducts = this.productsService.getMaxPopularProducts();
    this.maxNewestProducts = this.productsService.getMaxNewestProducts();

    this.popularProductsSub = this.productsService.getPopularProductsUpdateListener()
      .subscribe((products: { prev: Product[], curr: Product[], next: Product[] }) => {
        this.prevPopularProducts = products.prev;
        this.currPopularProducts = products.curr;
        this.nextPopularProducts = products.next;
        this.popularShortSupply = this.currPopularProducts.length <= this.productsPerRow;
        console.log(this.currPopularPage);
      });

    this.newestProductsSub = this.productsService.getNewestProductsUpdateListener()
      .subscribe((products: { prev: Product[], curr: Product[], next: Product[] }) => {
        this.prevNewestProducts = products.prev;
        this.currNewestProducts = products.curr;
        this.nextNewestProducts = products.next;
        this.newestShortSupply = this.currNewestProducts.length <= this.productsPerRow;
      });

    this.productsService.getPopularProducts(this.currPopularPage, this.productsPerPage);
    this.productsService.getNewestProducts(this.currNewestPage, this.productsPerPage);
  }

  onSlideLeftPopular() {
    this.currMoveRight = true;
    this.currMoving = true;
    this.popularSlideLeft = true;
    setTimeout(() => {
      this.currMoving = false;
      this.currMoveRight = null;
      this.popularSlideLeft = false;
      this.currPopularPage -= 1;
      this.productsService.getPopularProducts(this.currPopularPage, this.productsPerPage);
    }, 600);
  }

  onSlideRightPopular() {
    this.currMoveRight = false;
    this.currMoving = true;
    this.popularSlideRight = true;
    setTimeout(() => {
      this.currMoving = false;
      this.currMoveRight = null;
      this.popularSlideRight = false;
      this.currPopularPage += 1;
      this.productsService.getPopularProducts(this.currPopularPage, this.productsPerPage);
    }, 600);
  }

  onSlideLeftNewest() {
    // this.currNewestPage -= 1;
    // this.newestSlidingLeft = true;
    // this.productsService.getNewestProducts(this.currNewestPage, this.productsPerPage);
  }

  onSlideRightNewest() {
    // this.currNewestPage += 1;
    // this.newestSlidingRight = true;
    // this.productsService.getNewestProducts(this.currNewestPage, this.productsPerPage);
  }

}
