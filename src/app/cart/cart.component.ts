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

  // Furniture increase

   fincrease(pid: number): void {
    this.cartService.fincreaseQuantity(pid);
    this.loadCartItems();
  }

  //mens increase

  mincrease(pid: number): void {
    this.cartService.mincreaseQuantity(pid);
    this.loadCartItems();
  }
   Wincrease(pid: number): void {
    this.cartService.WincreaseQuantity(pid);
    this.loadCartItems();
  }
   Kincrease(pid: number): void {
    this.cartService.KincreaseQuantity(pid);
    this.loadCartItems();
  }

  //books increase
   Booksincrease(pid: number): void {
    this.cartService.BooksincreaseQuantity(pid);
    this.loadCartItems();
  }
 // beauty increase

 Beautyincrease(pid: number): void {
    this.cartService.BeautyincreaseQuantity(pid);
    this.loadCartItems();
  }
  // Appliance decrease
  Adecrease(pid: number): void {
    this.cartService. AdecreaseQuantity(pid);
    this.loadCartItems();
  }
  // Toys decrease
  Tdecrease(pid: number): void {
    this.cartService.TdecreaseQuantity(pid);
    this.loadCartItems();
  }
// Furniture decrease

 fdecrease(pid: number): void {
    this.cartService.fdecreaseQuantity(pid);
    this.loadCartItems();
  }

  // mens decrease 

   mdecrease(pid: number): void {
    this.cartService.mdecreaseQuantity(pid);
    this.loadCartItems();
  }
// womens decrease
  Wdecrease(pid: number): void {
    this.cartService.WdecreaseQuantity(pid);
    this.loadCartItems();
  }
   Kdecrease(pid: number): void {
    this.cartService.KdecreaseQuantity(pid);
    this.loadCartItems();
  }
  //books decrease

   Booksdecrease(pid: number): void {
    this.cartService.BooksdecreaseQuantity(pid);
    this.loadCartItems();
  }

  //beauty decrease
Beautydecrease(pid: number): void {
    this.cartService.BeautydecreaseQuantity(pid);
    this.loadCartItems();
  }

  // Appliance remove
  Aremove(pid: number): void {
    this.cartService.AremoveFromCart(pid);
    this.loadCartItems();
  }
  Wremove(pid: number): void {
    this.cartService.WremoveFromCart(pid);
    this.loadCartItems();
  }
   Kremove(pid: number): void {
    this.cartService.KremoveFromCart(pid);
    this.loadCartItems();
  }
   // Toys remove
  Tremove(pid: number): void {
    this.cartService.TremoveFromCart(pid);
    this.loadCartItems();
  }

  // Furniture Remove

   fremove(pid: number): void {
    this.cartService.fremoveFromCart(pid);
    this.loadCartItems();
  }
  //mens remove
   mremove(pid: number): void {
    this.cartService.mremoveFromCart(pid);
    this.loadCartItems();
  }
  
  //books remove 
   Booksremove(pid: number): void {
    this.cartService.BooksremoveFromCart(pid);
    this.loadCartItems();
  }

  //beauty remove
Beautyremove(pid: number): void {
    this.cartService.BeautyremoveFromCart(pid);
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
      }else if(item.type==='furniture'){
        total+=item.price* item.quantity
      }else if(item.type==='mens'){
        total+=item.price* item.quantity
      } else if(item.type==='Womens')
        {
          total+= item.price*item.quantity
        }else if(item.type==='kids')
        {
          total+= item.price*item.quantity
        }else if(item.type==='books')
        {
          total+= item.price*item.quantity
        }else if(item.type==='beauty')
        {
          total+= item.price*item.quantity
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
