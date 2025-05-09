import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() {
    // Load cart data from localStorage on service initialization
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
    }
  }

  // Get the cart items
  getCartItems(): any[] {
    return this.cartItems;
  }

  // Add item to the cart or update quantity if already present
  addToCart(product: any): void {
    // Check if the product is already in the cart
    const existingProduct = this.cartItems.find(item => item.pid === product.pid);

    if (existingProduct) {
      // If product exists, increase quantity
      existingProduct.quantity += 1;
    } else {
      // If product doesn't exist, add new product to the cart
      this.cartItems.push({ ...product, quantity: 1 });
    }

    this.saveCart();
  }

  // Persist the cart data in localStorage
  private saveCart(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  // Optionally, remove item from cart
  removeFromCart(pid: number): void {
    this.cartItems = this.cartItems.filter(item => item.pid !== pid);
    this.saveCart();
  }

  // Clear the entire cart
  clearCart(): void {
    this.cartItems = [];
    localStorage.removeItem('cartItems');
  }
}
