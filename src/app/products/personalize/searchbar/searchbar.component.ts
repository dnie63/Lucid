import { Component } from '@angular/core';

@Component({
  selector: 'app-personalize-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class PersonalizeSearchbarComponent {

  searchValue: string;

  pricesSelected: string[] = [];
  prices = [
    '$0 - $25',
    '$25 - $50',
    '$50 - $100',
    '$100 - $200',
    'Over $200'
  ]

  availsSelected: string[] = [];
  avails = [
    'In Stock',
    'Out of Stock'
  ]

  sortSelected = "Featured";
  sorts = [
    'Price (Low-High)',
    'Price (High-Low)',
    'Average Rating',
    'Featured',
    'Newest'
  ];

  onClickSortItem(sort: string) {
    this.sortSelected = sort;
  }

  onClickAvailItem(avail: string) {
    let index = this.availsSelected.indexOf(avail);
    if (index == -1) {
      this.availsSelected.push(avail);
    } else {
      this.availsSelected.splice(index, 1);
    }
  }

  onClickPriceItem(price: string) {
    let index = this.pricesSelected.indexOf(price);
    if (index == -1) {
      this.pricesSelected.push(price);
    } else {
      this.pricesSelected.splice(index, 1);
    }
  }

}
