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

  // Remove item from cart
  removeFromCart(pid: number): void {
    this.cartService.removeFromCart(pid);
    this.cartItems = this.cartService.getCartItems();  // Update cart items after removal
  }
}
