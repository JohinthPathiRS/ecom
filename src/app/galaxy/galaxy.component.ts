import { Component } from '@angular/core';

@Component({
  selector: 'app-galaxy',
  templateUrl: './galaxy.component.html',
  styleUrl: './galaxy.component.css'
})
export class GalaxyComponent {

    items = [
      { id: 1, name: 'Samsung', basePrice: 135999, price: 135999, quantity: 1 },
      // Add other items as needed
    ];
  
    increaseQuantity(item: any) {
      item.quantity++;
      this.adjustPrice(item);
    }
  
    decreaseQuantity(item: any) {
      if (item.quantity > 1) {
        item.quantity--;
        this.adjustPrice(item);
      }
    }
  
    adjustPrice(item: any) {
      // Set the price to the base price multiplied by the quantity
      item.price = item.basePrice * item.quantity;
    }
  
}
