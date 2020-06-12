import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  dummyPopularProducts: Product[] = [
    {
      name: "prod-1",
      source: "source-1",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/arrow.jpg",
      price: 10
    },
    {
      name: "prod-2",
      source: "source-2",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/balloon-chair.jpg",
      price: 10
    },
    {
      name: "prod-3",
      source: "source-3",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/beach-chair.jpg",
      price: 10
    },
    {
      name: "prod-4",
      source: "source-4",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/beach-sunset.jpg",
      price: 10
    },
    {
      name: "prod-5",
      source: "source-5",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/blue-orange.jpg",
      price: 10
    },
    {
      name: "prod-6",
      source: "source-6",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/blue-wall.jpg",
      price: 10
    },
    {
      name: "prod-7",
      source: "source-7",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/books.jpg",
      price: 10
    },
    {
      name: "prod-8",
      source: "source-8",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/city.jpg",
      price: 10
    },
    {
      name: "prod-9",
      source: "source-9",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/clovers.jpg",
      price: 10
    },
    {
      name: "prod-10",
      source: "source-10",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/coffee-cup.jpg",
      price: 10
    },
    {
      name: "prod-11",
      source: "source-11",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/colored-tiles.jpg",
      price: 10
    },
    {
      name: "prod-12",
      source: "source-12",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/confetti.jpg",
      price: 10
    }
  ]

  dummyNewestProducts: Product[] = [
    {
      name: "prod-1",
      source: "source-1",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/crosswalk.jpg",
      price: 10
    },
    {
      name: "prod-2",
      source: "source-2",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/electric-lines.jpg",
      price: 10
    },
    {
      name: "prod-3",
      source: "source-3",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/fire.jpg",
      price: 10
    },
    {
      name: "prod-4",
      source: "source-4",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/fire-smoke.jpg",
      price: 10
    },
    {
      name: "prod-5",
      source: "source-5",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/fireworks-ocean.jpg",
      price: 10
    },
    {
      name: "prod-6",
      source: "source-6",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/great.jpg",
      price: 10
    },
    {
      name: "prod-7",
      source: "source-7",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/hallway.jpg",
      price: 10
    },
    {
      name: "prod-8",
      source: "source-8",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/hayfield.jpg",
      price: 10
    },
    {
      name: "prod-9",
      source: "source-9",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/ironic-sign.jpg",
      price: 10
    },
    {
      name: "prod-10",
      source: "source-10",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/lake.jpg",
      price: 10
    },
    {
      name: "prod-11",
      source: "source-11",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/lego-heads.jpg",
      price: 10
    },
    {
      name: "prod-12",
      source: "source-12",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/lightbulb.jpg",
      price: 10
    }
  ]

  private popularProductsUpdate = new Subject<{ popularProducts: Product[] }>();
  private newestProductsUpdate = new Subject<{ newestProducts: Product[] }>();

  getPopularProductsUpdateListener() {
    return this.popularProductsUpdate.asObservable();
  }

  getNewestProductsUpdateListener() {
    return this.newestProductsUpdate.asObservable();
  }

  getPopularProducts(currPage: number, productsPerPage: number) {
    this.popularProductsUpdate.next({
      popularProducts: this.dummyPopularProducts.slice(currPage * productsPerPage, currPage * productsPerPage + productsPerPage)
    });
  }

  getNewestProducts(currPage: number, productsPerPage: number) {
    this.newestProductsUpdate.next({
      newestProducts: this.dummyNewestProducts.slice(currPage * productsPerPage, currPage * productsPerPage + productsPerPage)
    });
  }

  getMaxPopularProducts() {
    return this.dummyPopularProducts.length;
  }

  getMaxNewestProducts() {
    return this.dummyNewestProducts.length;
  }

}
