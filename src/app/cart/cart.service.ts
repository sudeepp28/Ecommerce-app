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
  // Add books to cart

   BooksAddToCart(product: any): void {
    const existingItem = this.cartItems.find(item =>
      item.type === 'books' &&
      item.pid === product.pid
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.unshift({ ...product, quantity: 1, type: 'books' });
    }

    this.saveCartToLocalStorage();
  }

  // Add Beauty to cart

  BeautyAddToCart(product: any): void {
    const existingItem = this.cartItems.find(item =>
      item.type === 'beauty' &&
      item.pid === product.pid
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.unshift({ ...product, quantity: 1, type: 'beauty' });
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
  // Add Furniture to cart

  FurnitureAddToCart(product: any): void {
    const existingItem = this.cartItems.find(item =>
      item.type === 'furniture' &&
      item.pid === product.pid
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.unshift({ ...product, quantity: 1, type: 'furniture' });
    }

    this.saveCartToLocalStorage();
  }
  mensAddToCart(product: any): void {
    const existingItem = this.cartItems.find(item =>
      item.type === 'mens' &&
      item.pid === product.pid
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.unshift({ ...product, quantity: 1, type: 'mens' });
    }

    this.saveCartToLocalStorage();
  }
  
  //add womens to Cart

   WomensAddToCart(product: any): void {
    const existingItem = this.cartItems.find(item =>
      item.type === 'Womens' &&
      item.pid === product.pid
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.unshift({ ...product, quantity: 1, type: 'Womens' });
    }
console.log(this.cartItems)
    this.saveCartToLocalStorage();
  }
  // kids AddtoCart

  KidsAddToCart(product: any): void {
    const existingItem = this.cartItems.find(item =>
      item.type === 'kids' &&
      item.pid === product.pid
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.unshift({ ...product, quantity: 1, type: 'kids' });
    }
console.log(this.cartItems)
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

  //Womens Quantity+1

   WincreaseQuantity(pid: number): void {
    const item = this.cartItems.find(i =>
      i.type === 'Womens' &&
      i.pid === pid
    );

    if (item) {
      item.quantity += 1;
      this.saveCartToLocalStorage();
    }
  }
  //books Quantity+1

  BooksincreaseQuantity(pid: number): void {
    const item = this.cartItems.find(i =>
      i.type === 'books' &&
      i.pid === pid
    );

    if (item) {
      item.quantity += 1;
      this.saveCartToLocalStorage();
    }
  }

  //beauty Quantity+1

  BeautyincreaseQuantity(pid: number): void {
    const item = this.cartItems.find(i =>
      i.type === 'beauty' &&
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
  //furniture Quantity+1

   fincreaseQuantity(pid: number): void {
    const item = this.cartItems.find(i =>
      i.type === 'furniture' &&
      i.pid === pid
    );

    if (item) {
      item.quantity += 1;
      this.saveCartToLocalStorage();
    }
  }

  // mens Quantity+1

   mincreaseQuantity(pid: number): void {
    const item = this.cartItems.find(i =>
      i.type === 'mens' &&
      i.pid === pid
    );

    if (item) {
      item.quantity += 1;
      this.saveCartToLocalStorage();
    }
  }
  // kids quantity +1

   KincreaseQuantity(pid: number): void {
    const item = this.cartItems.find(i =>
      i.type === 'kids' &&
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

  //books Quanntity-1
  BooksdecreaseQuantity(pid: number): void {
    const item = this.cartItems.find(i =>
      i.type === 'books' &&
      i.pid === pid
    );

    if (item && item.quantity > 1) {
      item.quantity -= 1;
      this.saveCartToLocalStorage();
    }
  }
  //beauty Quantity-1

  BeautydecreaseQuantity(pid: number): void {
    const item = this.cartItems.find(i =>
      i.type === 'beauty' &&
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

  //Womens Quantity-1
  WdecreaseQuantity(pid: number): void {
    const item = this.cartItems.find(i =>
      i.type === 'Womens' &&
      i.pid === pid
    );

    if (item && item.quantity > 1) {
      item.quantity -= 1;
      this.saveCartToLocalStorage();
    }
  }
  //Kids Quanity-1

  KdecreaseQuantity(pid: number): void {
    const item = this.cartItems.find(i =>
      i.type === 'kids' &&
      i.pid === pid
    );

    if (item && item.quantity > 1) {
      item.quantity -= 1;
      this.saveCartToLocalStorage();
    }
  }

  // Furniture Quantity-1

   fdecreaseQuantity(pid: number): void {
    const item = this.cartItems.find(i =>
      i.type === 'furniture' &&
      i.pid === pid
    );

    if (item && item.quantity > 1) {
      item.quantity -= 1;
      this.saveCartToLocalStorage();
    }
  }
// mens Quantity-1

mdecreaseQuantity(pid: number): void {
    const item = this.cartItems.find(i =>
      i.type === 'mens' &&
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
  // Remove books from cart

  BooksremoveFromCart(pid: number): void {
    const index = this.cartItems.findIndex(item =>
      item.type === 'books' &&
      item.pid === pid
    );

    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.saveCartToLocalStorage();
    }
  }
  //remove beauty from cart

  BeautyremoveFromCart(pid: number): void {
    const index = this.cartItems.findIndex(item =>
      item.type === 'beauty' &&
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

  // Remove Furniture  from Cart

   fremoveFromCart(pid: number): void {
    const index = this.cartItems.findIndex(item =>
      item.type === 'furniture' &&
      item.pid === pid
    );

    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.saveCartToLocalStorage();
    }
  }
   WremoveFromCart(pid: number): void {
    const index = this.cartItems.findIndex(item =>
      item.type === 'Womens' &&
      item.pid === pid
    );

    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.saveCartToLocalStorage();
    }
  }
  // remove Kids from cart
KremoveFromCart(pid: number): void {
    const index = this.cartItems.findIndex(item =>
      item.type === 'kids' &&
      item.pid === pid
    );

    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.saveCartToLocalStorage();
    }
  }


  //remove mens from cart

  mremoveFromCart(pid: number): void {
    const index = this.cartItems.findIndex(item =>
      item.type === 'mens' &&
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
