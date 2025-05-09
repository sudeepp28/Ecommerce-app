import { Component } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-buy',
  standalone:false,
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BUYComponent {
  cartItems: any[]=[];
  totalAmount=0
  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal()

  }
  calculateTotal(): void {
  this.totalAmount = this.cartItems.reduce((acc, item) => {
     return acc + (item.price * (item.quantity || 1));
  }, 0);
}

confirmOrder(){
alert('Your Order is Placed')
}
}