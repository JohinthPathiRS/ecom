import { Component } from '@angular/core';

@Component({
  selector: 'app-hp',
  templateUrl: './hp.component.html',
  styleUrl: './hp.component.css'
})
export class HpComponent {
  items = [
    { id: 1, name: 'Infinix', basePrice: 12997, price: 12997, quantity: 1 },
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
