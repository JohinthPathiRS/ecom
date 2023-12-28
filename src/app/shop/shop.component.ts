import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  constructor(private router: Router, private dataService: DataService,private cartService: CartService ) { }


  
  items = [
    { id: 1, image:'/assets/mobiles/infinix.png', name: 'Infinix Hot 30 5G', basePrice: 12997, price: 12997, quantity: 1, route: "/infinix" },
    { id: 2, image:'/assets/mobiles/samsung.jpeg', name: 'Samsung S23+', basePrice: 94999, price: 94999, quantity: 1, route: "/samsung" },
    { id: 3, image:'/assets/mobiles/Moto.png', name: 'Motorola Edge 40 neo 5G', basePrice: 45990, price: 45990, quantity: 1, route: "/motorola" },
    { id: 4, image:'/assets/mobiles/nothing.png', name: 'Nothing 2', basePrice: 16999, price: 16999, quantity: 1, route: "/nothing" },
    { id: 5, image:'/assets/mobiles/Realme.png', name: 'Realme C53 5G', basePrice: 8845, price: 8845, quantity: 1, route: "/realme" },
    { id: 6, image:'/assets/mobiles/vivo.png', name: 'Vivo Y52 5G', basePrice: 16900, price: 16900, quantity: 1, route: "/vivo" },
    { id: 7, image:'/assets/mobiles/poco.webp', name: 'Poco X6 5G', basePrice: 13999, price: 13999, quantity: 1, route: "/add-zeb" },
    {id:8,image:'/assets/ad/sam.jpg',name:'Samsung F14 5G',basePrice:8999,price:8999,quantity:1,route:"/add-sam"}
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

    item.price = item.basePrice * item.quantity;
  }
  goToPayment(item: any) {
    this.dataService.setSelectedItem(item);
    this.cartService.updateCartCount(item.quantity);  // Update cart count based on item quantity
    this.router.navigate(['/payment']);
  }

}
