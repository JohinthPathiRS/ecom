// cart.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<number>(0);
  currentCartItems = this.cartItems.asObservable();

  constructor() {}

  updateCartCount(count: number) {
    this.cartItems.next(count);
  }
}
