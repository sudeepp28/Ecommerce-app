import { Component } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy',
  standalone:false,
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BUYComponent {
  cartItems: any[]=[];
  totalAmount=0
  constructor(private cartService:CartService,private router:Router){}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal()

  }
  calculateTotal(): void {
  this.totalAmount = this.cartItems.reduce((acc, item) => {
     return acc + (item.selectedStorage.price * (item.quantity || 1));
  }, 0);
}

confirmOrder(){
alert('Your Order is Placed')
this.clearCart()
this.router.navigate(['/home'])
}
clearCart(){
  this.cartService.clearCart()
  this.cartItems=[]
 }
}