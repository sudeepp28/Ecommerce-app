import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() {
    this.loadCartFromLocalStorage();
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

  // Add Mobile to Cart
  MobileaddToCart(product: any): void {
    const existingItem = this.cartItems.find(item =>
      item.type === 'mobile' &&
      item.pid === product.pid &&
      item.selectedColor === product.selectedColor &&
      JSON.stringify(item.selectedStorage) === JSON.stringify(product.selectedStorage)
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.unshift({ ...product, quantity: 1, type: 'mobile' });
    }

    this.saveCartToLocalStorage();
  }

  // Add Appliance to Cart
  applianceAddToCart(product: any): void {
    const existingItem = this.cartItems.find(item =>
      item.type === 'appliance' &&
      item.pid === product.pid
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.unshift({ ...product, quantity: 1, type: 'appliance' });
    }

    this.saveCartToLocalStorage();
  }

  // Add Toys to cart

  toysAddToCart(product: any): void {
    const existingItem = this.cartItems.find(item =>
      item.type === 'toys' &&
      item.pid === product.pid
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.unshift({ ...product, quantity: 1, type: 'toys' });
    }

    this.saveCartToLocalStorage();
  }

  // Mobile Quantity +1
  increaseQuantity(pid: number, selectedColor: string, selectedStorage: {}): void {
    const item = this.cartItems.find(i =>
      i.type === 'mobile' &&
      i.pid === pid &&
      i.selectedColor === selectedColor &&
      JSON.stringify(i.selectedStorage) === JSON.stringify(selectedStorage)
    );

    if (item) {
      item.quantity += 1;
      this.saveCartToLocalStorage();
    }
  }

  // Mobile Quantity -1
  decreaseQuantity(pid: number, selectedColor: string, selectedStorage: {}): void {
    const item = this.cartItems.find(i =>
      i.type === 'mobile' &&
      i.pid === pid &&
      i.selectedColor === selectedColor &&
      JSON.stringify(i.selectedStorage) === JSON.stringify(selectedStorage)
    );

    if (item && item.quantity > 1) {
      item.quantity -= 1;
      this.saveCartToLocalStorage();
    }
  }

  // Remove Mobile from Cart
  removeFromCart(pid: number, selectedColor: string, selectedStorage: {}): void {
    const index = this.cartItems.findIndex(item =>
      item.type === 'mobile' &&
      item.pid === pid &&
      item.selectedColor === selectedColor &&
      JSON.stringify(item.selectedStorage) === JSON.stringify(selectedStorage)
    );

    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.saveCartToLocalStorage();
    }
  }

  // Appliance Quantity +1
  AincreaseQuantity(pid: number): void {
    const item = this.cartItems.find(i =>
      i.type === 'appliance' &&
      i.pid === pid
    );

    if (item) {
      item.quantity += 1;
      this.saveCartToLocalStorage();
    }
  }

  // Toys Quantity+1

   TincreaseQuantity(pid: number): void {
    const item = this.cartItems.find(i =>
      i.type === 'toys' &&
      i.pid === pid
    );

    if (item) {
      item.quantity += 1;
      this.saveCartToLocalStorage();
    }
  }

  // Appliance Quantity -1
  AdecreaseQuantity(pid: number): void {
    const item = this.cartItems.find(i =>
      i.type === 'appliance' &&
      i.pid === pid
    );

    if (item && item.quantity > 1) {
      item.quantity -= 1;
      this.saveCartToLocalStorage();
    }
  }

  // Toys Quantity-1

   TdecreaseQuantity(pid: number): void {
    const item = this.cartItems.find(i =>
      i.type === 'toys' &&
      i.pid === pid
    );

    if (item && item.quantity > 1) {
      item.quantity -= 1;
      this.saveCartToLocalStorage();
    }
  }

  // Remove Appliance from Cart
  AremoveFromCart(pid: number): void {
    const index = this.cartItems.findIndex(item =>
      item.type === 'appliance' &&
      item.pid === pid
    );

    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.saveCartToLocalStorage();
    }
  }

   // Remove Toys from Cart
  TremoveFromCart(pid: number): void {
    const index = this.cartItems.findIndex(item =>
      item.type === 'toys' &&
      item.pid === pid
    );

    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.saveCartToLocalStorage();
    }
  }

  // Clear Entire Cart
  clearCart(): void {
    this.cartItems = [];
    localStorage.removeItem('cart');
  }
}
