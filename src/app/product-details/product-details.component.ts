import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../Mobile_product-details';  // Your product list
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-details',
  standalone:false,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: any = null;
  productId: number | null = null;
  productPid: number | null = null;
  fullSpecKeys: string[] = [];
private cartService= inject(CartService)
  constructor(private route: ActivatedRoute) {}

 ngOnInit(): void {
  this.productId = +this.route.snapshot.paramMap.get('id')!;
  this.productPid = +this.route.snapshot.paramMap.get('pid')!;

  const matchedProduct = Products.find(product => product.id === this.productId);

  if (matchedProduct) {
    const product = Object.values(matchedProduct)[1].find((prod: any) => prod.pid === this.productPid);

    if (product) {
      this.productDetails = product;

      if (product.fullSpecs) {
        this.fullSpecKeys = Object.keys(product.fullSpecs);
      }
    } else {
      console.error('No product found with this PID:', this.productPid);
    }
  } else {
    console.error('No product found with this ID:', this.productId);
  }
}

 addToCart():void{
  if(this.productDetails){
    this.cartService.addToCart(this.productDetails);
    alert(`${this.productDetails.model} has been added to cart`)
  }
 }
  isFullSpec=false
 
  onShowFullSpec(){
    this.isFullSpec=!this.isFullSpec

    
  }

}
