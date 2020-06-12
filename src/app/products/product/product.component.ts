import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() name = "Cream Hoodie";
  @Input() source = "Abercrombie"
  @Input() link = "https://www.abercrombie.com/shop/us/p/essential-hoodie-41085822?categoryId=12351&seq=01&faceout=prod1";
  @Input() imagePath = "./assets/tempbackendimgs/puppy.jpg";
  @Input() price = 17.99;

}
