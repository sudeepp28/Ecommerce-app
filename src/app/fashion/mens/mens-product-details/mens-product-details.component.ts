import { Component, OnInit } from '@angular/core';
import { MensDetails } from '../mens-product-details';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../cart/cart.service';

@Component({
  selector: 'app-mens-product-details',
  standalone:false,
  templateUrl: './mens-product-details.component.html',
  styleUrl: './mens-product-details.component.css'
})
export class MensProductDetailsComponent implements OnInit{
 
   productDetails: any = null;
   productId: number | null = null;
   productPid: number | null = null;
   Products=MensDetails

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
    this.cartService.mensAddToCart(this.productDetails)
    alert(`your ${this.productDetails.name} is added to cart`)
  }
  
 }
   
}
