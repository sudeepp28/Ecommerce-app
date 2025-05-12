import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone:false,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  private loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  // Mobile increase
  increase(pid: number, selectedColor: string, selectedStorage: {}): void {
    this.cartService.increaseQuantity(pid, selectedColor, selectedStorage);
    this.loadCartItems();
  }

  // Mobile decrease
  decrease(pid: number, selectedColor: string, selectedStorage: {}): void {
    this.cartService.decreaseQuantity(pid, selectedColor, selectedStorage);
    this.loadCartItems();
  }

  // Mobile remove
  remove(pid: number, selectedColor: string, selectedStorage: {}): void {
    this.cartService.removeFromCart(pid, selectedColor, selectedStorage);
    this.loadCartItems();
  }

  // Appliance increase
  Aincrease(pid: number): void {
    this.cartService.AincreaseQuantity(pid);
    this.loadCartItems();
  }

  //Toys increase

  Tincrease(pid: number): void {
    this.cartService.TincreaseQuantity(pid);
    this.loadCartItems();
  }

  // Appliance decrease
  Adecrease(pid: number): void {
    this.cartService.AdecreaseQuantity(pid);
    this.loadCartItems();
  }
  // Toys decrease
  Tdecrease(pid: number): void {
    this.cartService.TdecreaseQuantity(pid);
    this.loadCartItems();
  }

  // Appliance remove
  Aremove(pid: number): void {
    this.cartService.AremoveFromCart(pid);
    this.loadCartItems();
  }
   // Toys remove
  Tremove(pid: number): void {
    this.cartService.TremoveFromCart(pid);
    this.loadCartItems();
  }

  // Calculate total
  getTotal(): number {
    let total = 0;
    for (let item of this.cartItems) {
      if (item.type === 'mobile') {
        total += item.selectedStorage.price * item.quantity;
      } else if (item.type === 'appliance') {
        total += item.price * item.quantity;
      }
      else if(item.type==='toys'){
        total+=item.price* item.quantity
      }
    }
    return total;
  }

  proceedToBuy(): void {
    this.router.navigate(['/buy']);
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }
}
