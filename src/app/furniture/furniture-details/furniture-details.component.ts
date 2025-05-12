import { Component } from '@angular/core';
import { FurnitureB } from '../furniture-banners';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart/cart.service';
import { FurnitureDetails } from '../furniture-Details';

@Component({
  selector: 'app-furniture-details',
  standalone:false,
  templateUrl: './furniture-details.component.html',
  styleUrl: './furniture-details.component.css'
})
export class FurnitureDetailsComponent {
  productDetails: any = null;
   productId: number | null = null;
   productPid: number | null = null;
   Products=FurnitureDetails

   constructor(private route: ActivatedRoute, private cartService:CartService) {}
 
  ngOnInit(): void {
   this.productId = +this.route.snapshot.paramMap.get('id')!;
   this.productPid = +this.route.snapshot.paramMap.get('pid')!;
 
   const matchedProduct = this.Products.find(product => product.id === this.productId);
 
   if (matchedProduct) {
     const product = Object.values(matchedProduct)[1].find((prod: any) => prod.pid === this.productPid);

 
     if (product) {
       this.productDetails = product;
       console.log(this.productDetails)
       
        
       

 
       
     } else {
       console.error('No product found with this PID:', this.productPid);
     }
   } else {
     console.error('No product found with this ID:', this.productId);
   }
 }

  addToCart(){
  if(this.productDetails){
    this.cartService.FurnitureAddToCart(this.productDetails)
    alert(`your ${this.productDetails.name} is added to cart`)
  }
  
 }
}
