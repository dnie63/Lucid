import { Component } from '@angular/core';

@Component({
  selector: 'app-personalize-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class PersonalizeSearchbarComponent {

  searchValue: string;

  sortValue = "Featured";
  sorts = [
    'Price (Low-High)',
    'Price (High-Low)',
    'Average Rating',
    'Featured',
    'Newest'
  ];

  onClickSortItem(sort: string) {
    this.sortValue = sort;
  }

}
