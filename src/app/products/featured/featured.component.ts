import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { ProductsService } from '../products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-featured',
  animations: [
    trigger('slideInOut', [
      state('left', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(0)' })),
      transition('left => void', [
        animate('0.5s ease-out', style({ transform: 'translateX(120%)' }))
      ]),
      transition('right => void', [
        animate('0.5s ease-out', style({ transform: 'translateX(-120%)' }))
      ]),
      transition('void => left', [
        style({ transform: 'translateX(-120%)' }),
        animate('0.5s ease-out')
      ]),
      transition('void => right', [
        style({ transform: 'translateX(120%)' }),
        animate('0.5s ease-out')
      ])
    ])
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

  popularProducts: [Product[]] = [null];
  newestProducts: [Product[]] = [null];
  currPopularPage = 0;
  currNewestPage = 0;

  popularSlideRight: boolean;
  newestSlideRight: boolean;
  popularShortSupply: boolean;
  newestShortSupply: boolean;

  maxPages = 5;
  popularPageNumbers: number[];
  newestPageNumbers: number[];

  constructor(public productsService: ProductsService) {}

  ngOnInit() {
    this.maxPopularProducts = this.productsService.getMaxPopularProducts();
    this.maxNewestProducts = this.productsService.getMaxNewestProducts();
    this.popularPageNumbers = [];
    this.newestPageNumbers = [];
    for (let i = 0; i < Math.min(this.maxPages, this.maxPopularProducts / this.productsPerPage); i++) {
      this.popularPageNumbers[i] = i + 1;
    }
    for (let i = 0; i < Math.min(this.maxPages, this.maxNewestProducts / this.productsPerPage); i++) {
      this.newestPageNumbers[i] = i + 1;
    }

    this.popularProductsSub = this.productsService.getPopularProductsUpdateListener()
      .subscribe((products: { currProducts: Product[] }) => {
        this.popularProducts.pop();
        this.popularProducts.push(products.currProducts);
        this.popularShortSupply = this.popularProducts[0].length <= this.productsPerRow;
      });

    this.newestProductsSub = this.productsService.getNewestProductsUpdateListener()
      .subscribe((products: { currProducts: Product[] }) => {
        this.newestProducts.pop();
        this.newestProducts.push(products.currProducts);
        this.newestShortSupply = this.newestProducts[0].length <= this.productsPerRow;
      });

    this.productsService.getPopularProducts(this.currPopularPage, this.productsPerPage);
    this.productsService.getNewestProducts(this.currNewestPage, this.productsPerPage);
  }

  onSlidePopular(slideRight: boolean, diff: number) {
    this.popularSlideRight = slideRight;
    setTimeout(() => {
      this.currPopularPage += diff;
      this.adjustPagination(this.currPopularPage + 1, this.popularPageNumbers, this.maxPopularProducts);
      this.productsService.getPopularProducts(this.currPopularPage, this.productsPerPage);
    }, 10);
  }

  onSlideNewest(slideRight: boolean, diff: number) {
    this.newestSlideRight = slideRight;
    setTimeout(() => {
      this.currNewestPage += diff;
      this.adjustPagination(this.currNewestPage + 1, this.newestPageNumbers, this.maxNewestProducts);
      this.productsService.getNewestProducts(this.currNewestPage, this.productsPerPage);
    }, 10);
  }

  onClickPagePopular(newPage: number) {
    if (newPage == this.currPopularPage) {
      return;
    } else {
      this.popularSlideRight = newPage > this.currPopularPage;
      setTimeout(() => {
        this.currPopularPage = newPage;
        this.adjustPagination(newPage + 1, this.popularPageNumbers, this.maxPopularProducts);
        this.productsService.getPopularProducts(this.currPopularPage, this.productsPerPage);
      }, 10);
    }
  }

  onClickPageNewest(newPage: number) {
    if (newPage == this.currNewestPage) {
      return;
    } else {
      this.newestSlideRight = newPage > this.currNewestPage;
      setTimeout(() => {
        this.currNewestPage = newPage;
        this.adjustPagination(newPage + 1, this.newestPageNumbers, this.maxNewestProducts);
        this.productsService.getNewestProducts(this.currNewestPage, this.productsPerPage);
      }, 10);
    }
  }

  private adjustPagination(newPage: number, pageNumbers: number[], maxProducts: number) {
    let mid = Math.floor(this.maxPages / 2);
    let index = pageNumbers.indexOf(newPage);
    if (index == mid) {
      return;
    } else {
      let lowerBound = Math.max(1, pageNumbers[0] - (mid - index));
      let upperBound = Math.min(Math.ceil(maxProducts / this.productsPerPage),
        pageNumbers[pageNumbers.length - 1] - (mid - index));
      let lowerDiff = lowerBound - pageNumbers[0];
      let upperDiff = upperBound - pageNumbers[pageNumbers.length - 1];
      let diff;
      if (Math.abs(lowerDiff) < Math.abs(upperDiff)) {
        diff = lowerDiff;
      } else {
        diff = upperDiff;
      }
      for (let i = 0; i < pageNumbers.length; i++) {
        pageNumbers[i] += diff;
      }
    }
  }

}
