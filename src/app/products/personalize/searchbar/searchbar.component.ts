import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalize-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class PersonalizeSearchbarComponent implements OnInit {

  searchValue: string;

  pricesSelected: string[] = [];
  prices = [
    '$0 - $25',
    '$25 - $50',
    '$50 - $100',
    '$100 - $200',
    'Over $200'
  ]

  sizesSelected = [
    ['Standard'],
    ['Chest'],
    ['Arm']
  ]
  sizes = [
    ['Standard', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
    ['Chest', '32', '34', '35', '37', '38', '40', '41', '43', '44', '46', '47', '49'],
    ['Arm', '32', '33', '34', '35', '36', '36.5']
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

  onClickSizeItem(sizeVal: string, arrayIndex: number, sizeIndex: number) {
    if (sizeIndex == 0) {
      return;
    }
    let index = this.sizesSelected[arrayIndex].indexOf(sizeVal);
    if (index == -1) {
      this.sizesSelected[arrayIndex].push(sizeVal);
    } else {
      this.sizesSelected[arrayIndex].splice(index, 1);
    }
  }

  ngOnInit() {
    $('.filter-toggle').click(() => {
      $('.filter-inner-container').collapse('hide');
    })
  }

}
