import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() {
    this.loadCartFromLocalStorage(); // Load cart on service init
  }

  private saveCartToLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  private loadCartFromLocalStorage(): void {
    const storedCart = localStorage.getItem('cart');
    this.cartItems = storedCart ? JSON.parse(storedCart) : [];
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  addToCart(product: any): void {
    const existingItem = this.cartItems.find(item => item.pid === product.pid);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.unshift({ ...product, quantity: 1 });
    }

    this.saveCartToLocalStorage();
  }

  increaseQuantity(pid: number): void {
    const item = this.cartItems.find(i => i.pid === pid);
    if (item) {
      item.quantity += 1;
      this.saveCartToLocalStorage();
    }
  }

  decreaseQuantity(pid: number): void {
    const item = this.cartItems.find(i => i.pid === pid);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
    } else {
      this.removeFromCart(pid);
    }
    this.saveCartToLocalStorage();
  }

  removeFromCart(pid: number): void {
    this.cartItems = this.cartItems.filter(item => item.pid !== pid);
    this.saveCartToLocalStorage();
  }

  clearCart(): void {
    this.cartItems = [];
    localStorage.removeItem('cart');
  }
}
