// shop.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-shop2',
  templateUrl: './shop2.component.html',
  styleUrls: ['./shop2.component.css']
})
export class Shop2Component {

  items = [
    { id: 1, image:'/assets/New folder/macbook.jpeg',name: 'Macbook air M1', basePrice: 68999, price: 85000, quantity: 1 ,route:"/mac"},
    {id:2,image:'/assets/New folder/samsunglap.jpeg',name:'Galaxy Book 3',basePrice:135999,price:135599,quantity:1, route:"/galaxy"},
    { id: 3, image:'/assets/New folder/acer.jpeg',name: 'Acer Aspire 3', basePrice: 75999, price: 75999, quantity: 1 , route:"/acer"},
    { id: 4, image:'/assets/New folder/HP.jpeg',name: 'Dell XPS 3', basePrice: 175399, price: 175399, quantity: 1, route: "/hp"},
    { id: 5, image:'/assets/New folder/lenovo.jpeg',name: 'Lenovo Yoga 3', basePrice: 72999, price: 72999, quantity: 1, route:"/lenovo" },
    { id: 6, image:'/assets/New folder/asus.jpeg',name: 'Asus VivoBook', basePrice: 62599, price: 62599, quantity: 1 , route:"/asus"},
    { id: 7, image:'/assets/ad/envy.webp',name: 'HP ENVY 13', basePrice: 187599, price: 187599, quantity: 1 , route:"/add-intel"},
    
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
