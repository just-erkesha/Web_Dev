import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product, products } from '../products';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  products = products;
  @Input() selectedProduct: string | undefined;

  like(product: Product){
    product.like+=1;
  }

  share() {
    window.alert('Telegram will be opened!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  removeProd(product: Product) {
    for(let i=0; i<products.length; i++){
      if(products[i] == product){
        delete products[i];
        break;
      }
    }
  }
}
