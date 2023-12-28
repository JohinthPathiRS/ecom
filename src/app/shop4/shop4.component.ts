// shop.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-shop4',
  templateUrl: './shop4.component.html',
  styleUrls: ['./shop4.component.css']
})
export class Shop4Component {
[x: string]: any;
  items = [
    { id: 1, image:'/assets/watch/applewatch.jpeg',name: 'Apple watch ultra', basePrice: 62599, price: 62599, quantity: 1 ,route:"/applewatch"},
    {id:2,image:'/assets/watch/boatwatch.jpeg',name:'Boat watch',basePrice:2899,price:2899,quantity:1, route:"/boat"},
    { id: 3, image:'/assets/watch/fireboltwatch.jpeg',name: 'Firebolt', basePrice: 2499, price: 2499, quantity: 1 , route:"/firebolt"},
    { id: 4, image:'/assets/watch/noisewatch.jpeg',name: 'Noise colorfit', basePrice: 1899, price: 1899, quantity: 1, route: "/noise"},
    { id: 5, image:'/assets/watch/Realmewatch.png',name: 'Realme watch 4', basePrice: 4599, price: 4599, quantity: 1, route:"/Realmewatch" },
    { id: 6, image:'/assets/watch/samsungwatch.jpeg',name: 'Galaxy watch 5', basePrice: 22599, price: 22599, quantity: 1 , route:"/galaxywatch"}
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
