import { Injectable } from '@angular/core';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  dummyProducts: Product[] = [
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
    },
    {
      name: "prod-13",
      source: "source-13",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/crosswalk.jpg",
      price: 10
    },
    {
      name: "prod-14",
      source: "source-14",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/electric-lines.jpg",
      price: 10
    },
    {
      name: "prod-15",
      source: "source-15",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/fire.jpg",
      price: 10
    },
    {
      name: "prod-16",
      source: "source-16",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/fire-smoke.jpg",
      price: 10
    },
    {
      name: "prod-17",
      source: "source-17",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/fireworks-ocean.jpg",
      price: 10
    },
    {
      name: "prod-18",
      source: "source-18",
      link: "https://angular.io/guide/workspace-config",
      imagePath: "./assets/tempbackendimgs/great.jpg",
      price: 10
    }
  ]

  getProducts() {
    return this.dummyProducts;
  }

}
