import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplianceProductDetails } from '../appliance-Product-details';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-appliance-product-details',
  standalone:false,
  templateUrl: './appliance-product-details.component.html',
  styleUrl: './appliance-product-details.component.css'
})
export class ApplianceProductDetailsComponent implements OnInit{
 
   productDetails: any = null;
   productId: number | null = null;
   productPid: number | null = null;
   Products=ApplianceProductDetails

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
    this.cartService.applianceAddToCart(this.productDetails)
    alert(`your ${this.productDetails.Product_name} is added to cart`)
  }
  
 }
   
}
