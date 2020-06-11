import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {

  imagePath = "./assets/images/puppy.jpg";
  name = "Cream Hoodie";
  source = "Abercrombie"
  price = 17.99;
  link = "https://www.abercrombie.com/shop/us/p/essential-hoodie-41085822?categoryId=12351&seq=01&faceout=prod1";

}
