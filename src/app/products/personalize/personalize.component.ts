import { Component } from '@angular/core';

@Component({
  selector: 'app-personalize',
  templateUrl: './personalize.component.html',
  styleUrls: ['./personalize.component.css']
})
export class PersonalizeComponent {

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
    'Ralph Lauren',
    'Calvin Klein',
    'Supreme',
    'Louis Vuitton',
    'Armani',
    'Fendi',
    'House of Versace',
    'Burberry',
    'Chanel',
    'Prada',
    'Hermes',
    'Gucci',
    'Adidas',
    'Nike',
    'PacSun',
    'Vans',
    'Urban Outfitters',
    'J. Crew',
    'American Eagle',
    'Abercrombie',
    'Zumiez',
    'Billabong',
    'DrJays',
    'Under Armour'
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

}
