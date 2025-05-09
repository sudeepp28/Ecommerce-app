import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
 // Import CartService

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Get the cart items from the service
    this.cartItems = this.cartService.getCartItems();
  }
 increase(pid: number) {
    this.cartService.increaseQuantity(pid);
  }

  decrease(pid: number) {
    this.cartService.decreaseQuantity(pid);
  }
  // Remove item from cart
  remove(pid: number): void {
    this.cartService.removeFromCart(pid);
    this.cartItems = this.cartService.getCartItems();  // Update cart items after removal
  }
  getTotal(): number {
  let total = 0;
  for (let item of this.cartItems) {
    total += item.price * item.quantity;
  }
  return total;
}
}
