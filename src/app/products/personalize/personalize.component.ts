import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { ProductsService } from '../products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-personalize',
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
  templateUrl: './personalize.component.html',
  styleUrls: ['./personalize.component.css']
})
export class PersonalizeComponent implements OnInit {

  firstPreferences = ['Women', 'Men'];
  secondPreferences = [
    ['Accessories', 'Swimwear', 'Shoes', 'Fragrance', 'Jewelry', 'Intimates', 'Dresses', 'Tops', 'Bottoms'],
    ['Watches', 'Bottoms', 'Tops', 'Swimwear', 'Underwear', 'Accessories', 'Socks', 'Bags']
  ];
  thirdPreferences = [
    [
      ['Bags', 'Sunglasses', 'Hats', 'Belts'],
      null,
      ['Sneakers', 'Heels', 'Flats'],
      null,
      null,
      ['Bras', 'Underwear'],
      null,
      ['Jackets', 'T-shirts', 'Bodysuits', 'Blouses', 'Hoodies', 'Sweaters'],
      ['Pants', 'Shorts', 'Leggings', 'Jeans', 'Skirts']
    ],
    [
      null,
      ['Shorts', 'Jeans', 'Pants', 'Joggers', 'Sweats'],
      ['T-shirts', 'Shirts', 'Hoodies', 'Sweaters', 'Polos', 'Jackets'],
      null,
      ['Boxer Briefs', 'Boxers'],
      ['Hats', 'Belts'],
      null,
      ['Duffel Bags', 'Backpacks', 'Briefcases']
    ]
  ];
  firstSelected = false;
  secondSelected = false;
  thirdSelected = false;
  firstIndex: number;
  secondIndex: number;
  thirdIndex: number;
  firstActive: string;
  secondActive: string;
  thirdActive: string;

  brandStoresSelected: string[] = [];
  brandStores = [
    'Adidas',
    'Nike',
    'PacSun',
    'Vans',
    'Urban Outfitters',
    'J. Crew',
    'American Eagle',
    'Abercrombie & Fitch',
    'Under Armour',
    'Dockers',
    'Levi\'s',
    'Bonobos',
    'Gap',
    'Express',
    'Duluth Trading Co.',
    'JC Penney',
    'Brooks Brothers',
    'Men\'s Wearhouse',
    'The North Face',
    'Ralph Lauren',
    'Calvin Klein',
    'Puma',
    'Van Heusen',
    'Eddie Bauer',
    'Lands\' End'
  ]

  onClickPreference(order: number, index: number, pref: string) {
    if (order == 0) {
      if (this.firstActive == null || this.firstActive != pref) {
        this.firstIndex = index;
        this.firstActive = pref;
        this.firstSelected = true;
        this.secondSelected = false;
        this.secondIndex = null;
        this.secondActive = null;
        this.thirdSelected = false;
        this.thirdIndex = null;
        this.thirdActive = null;
      } else {
        this.firstSelected = false;
        this.firstIndex = null;
        this.firstActive = null;
        this.secondSelected = false;
        this.secondIndex = null;
        this.secondActive = null;
        this.thirdSelected = false;
        this.thirdIndex = null;
        this.thirdActive = null;
      }
    } else if (order == 1) {
      if (this.secondActive == null || this.secondActive != pref) {
        this.secondIndex = index;
        this.secondActive = pref;
        this.secondSelected = true;
        this.thirdSelected = false;
        this.thirdIndex = null;
        this.thirdActive = null;
      } else {
        this.secondSelected = false;
        this.secondIndex = null;
        this.secondActive = null;
        this.thirdSelected = false;
        this.thirdIndex = null;
        this.thirdActive = null;
      }
    } else {
      if (this.thirdActive == null || this.thirdActive != pref) {
        this.thirdIndex = index;
        this.thirdActive = pref;
        this.thirdSelected = true;
      } else {
        this.thirdSelected = false;
        this.thirdIndex = null;
        this.thirdActive = null;
      }
    }
  }

  onClickBrandStore(brandStore: string) {
    let index = this.brandStoresSelected.indexOf(brandStore);
    if (index == -1) {
      this.brandStoresSelected.push(brandStore);
    } else {
      this.brandStoresSelected.splice(index, 1);
    }
  }



  productsPerPage = 9;
  productsPerRow = 3;
  maxProducts: number;

  private productsSub: Subscription;

  products: [Product[]] = [null];
  currPage = 0;

  slideRight: boolean;
  shortSupply: boolean;
  mediumSupply: boolean;
  tallSupply: boolean;

  maxPages = 5;
  pageNumbers: number[];

  constructor(public productsService: ProductsService) {}

  ngOnInit() {
    this.maxProducts = this.productsService.getMaxPersonalizeProducts();
    this.pageNumbers = [];
    for (let i = 0; i < Math.min(this.maxPages, this.maxProducts / this.productsPerPage); i++) {
      this.pageNumbers[i] = i + 1;
    }

    this.productsSub = this.productsService.getPersonalizeProductsUpdateListener()
      .subscribe((products: { currProducts: Product[] }) => {
        this.products.pop();
        this.products.push(products.currProducts);
        this.shortSupply = this.products[0].length <= this.productsPerRow;
        this.mediumSupply = this.products[0].length <= this.productsPerRow * 2 && !this.shortSupply;
        this.tallSupply = this.products[0].length <= this.productsPerRow * 3 && !this.shortSupply && !this.mediumSupply;
      });

    this.productsService.getPersonalizeProducts(this.currPage, this.productsPerPage);
  }

  onSlide(slideRight: boolean, diff: number) {
    this.slideRight = slideRight;
    setTimeout(() => {
      this.currPage += diff;
      this.adjustPagination(this.currPage + 1, this.pageNumbers, this.maxProducts);
      this.productsService.getPersonalizeProducts(this.currPage, this.productsPerPage);
    }, 10);
  }

  onClickPage(newPage: number) {
    if (newPage == this.currPage) {
      return;
    } else {
      this.slideRight = newPage > this.currPage;
      setTimeout(() => {
        this.currPage = newPage;
        this.adjustPagination(newPage + 1, this.pageNumbers, this.maxProducts);
        this.productsService.getPersonalizeProducts(this.currPage, this.productsPerPage);
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
