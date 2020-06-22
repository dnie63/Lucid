import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() name: string;
  @Input() source: string;
  @Input() link: string;
  @Input() imagePath: string;
  @Input() price: number;

}
