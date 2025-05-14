import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../cart/cart.service';
import { ActivatedRoute } from '@angular/router';
import { KidsproductDetails } from '../kidsDetails';

@Component({
  selector: 'app-kids-details',
  standalone:false,
  templateUrl: './kids-details.component.html',
  styleUrl: './kids-details.component.css'
})
export class KidsDetailsComponent implements OnInit{
 
   productDetails: any = null;
   productId: number | null = null;
   productPid: number | null = null;
   Products=KidsproductDetails

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
  this.cartService.KidsAddToCart(this.productDetails)
  alert(` your ${this.productDetails.name} is Added to cart`)
 }
   
}
