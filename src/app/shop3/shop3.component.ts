// shop.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-shop3',
  templateUrl: './shop3.component.html',
  styleUrls: ['./shop3.component.css']
})
export class Shop3Component {
[x: string]: any;
  items = [
    { id: 1, image:'/assets/shoes/adidas.jpeg',name: 'Adidas', basePrice: 3520, price: 3520, quantity: 1 ,route:"/adidas"},
    {id:2,image:'/assets/shoes/converse.jpeg',name:'Converse',basePrice:3899,price:3899,quantity:1, route:"/converse"},
    { id: 3, image:'/assets/shoes/newbalance.jpeg',name: 'New Balance', basePrice: 2000, price: 2000, quantity: 1 , route:"/newbalance"},
    { id: 4, image:'/assets/shoes/nike.jpeg',name: 'Nike', basePrice: 5499, price: 5499, quantity: 1, route: "/nike"},
    { id: 5, image:'/assets/shoes/puma.jpeg',name: 'Puma', basePrice: 5049, price: 5049, quantity: 1, route:"/puma" },
    { id: 6, image:'/assets/shoes/reebook.jpeg',name: 'Reebok', basePrice: 3600, price: 3600, quantity: 1 , route:"/reebok"}
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
