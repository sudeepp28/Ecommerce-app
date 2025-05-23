import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../Mobile_product-details';  // Your product list
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-product-details',
  standalone:false,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
selectedstorage:any
  productDetails: any = null;
  productId: number | null = null;
  productPid: number | null = null;
  colors:any=null
  color_code=null
  selectedColor:string=""
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
      this.selectedstorage=product.storageOptions[0];
      console.log(this.selectedstorage)
      if (product.fullSpecs) {
        this.fullSpecKeys = Object.keys(product.fullSpecs);
       
      }
if (product.fullSpecs.colors && product.fullSpecs.color_code) {
  this.colors = product.fullSpecs.colors.map((name: string, index: number) => ({
    name,
    code: product.fullSpecs.color_code[index]
    
  })
);

  
}

      
    } else {
      console.error('No product found with this PID:', this.productPid);
    }
  } else {
    console.error('No product found with this ID:', this.productId);
  }
}

 addToCart():void{

  if(this.selectedColor===""){
    alert("please select a color")
    return
  }
  if (this.productDetails) {
      const productWithColor = { ...this.productDetails, selectedColor: this.selectedColor, selectedStorage:this.selectedstorage};
      this.cartService.MobileaddToCart(productWithColor);
      alert(`${this.productDetails.model} in ${this.selectedColor} and storage :  ${this.selectedstorage.size} has been added to cart.`);
    }
  
 }
  isFullSpec=false
 
  onShowFullSpec(){
    this.isFullSpec=!this.isFullSpec  
  }

  
onSelectColor(color:string){
  this.selectedColor=color
 
}
  

}
