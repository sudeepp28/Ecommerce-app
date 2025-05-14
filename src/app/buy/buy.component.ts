import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy',
  standalone: false,
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BUYComponent implements OnInit {
  cartItems: any[] = [];
  totalAmount = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalAmount = this.cartItems.reduce((acc, item) => {
      if (item.type === 'mobile') {
        return acc + (item.selectedStorage.price * (item.quantity || 1));
      } else if (item.type === 'appliance') {
        return acc + (item.price * (item.quantity || 1));
      } else if(item.type==='toys'){
         return acc + (item.price * (item.quantity || 1));
      }
      else if(item.type==='furniture'){
        return acc + (item.price * (item.quantity || 1));
      }
      else if(item.type==='mens'){
        return acc + (item.price * (item.quantity || 1));
      }
      else if(item.type==='Womens'){
        return acc + (item.price * (item.quantity || 1));
      }
      else if(item.type==='kids'){
        return acc + (item.price * (item.quantity || 1));
      }
       else {
        return acc; // fallback for unknown item types
      }
    }, 0);
  }

  confirmOrder(): void {
    alert('Your Order is Placed');
    this.clearCart();
    this.router.navigate(['/home']);
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }
}
