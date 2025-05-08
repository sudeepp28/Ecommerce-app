import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../Mobile_product-details';  // Your product list

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the id and pid from the route
    this.productId = +this.route.snapshot.paramMap.get('id')!;
    this.productPid = +this.route.snapshot.paramMap.get('pid')!;

    console.log('Product ID:', this.productId);
    console.log('Product PID:', this.productPid);

    // Now, find the product by id and pid
    const matchedProduct = Products.find(product => product.id === this.productId);
    console.log(matchedProduct);

    if (matchedProduct) {
      // Find the specific product using the pid
      const product = Object.values(matchedProduct)[1].find((prod: any) => prod.pid === this.productPid);

     

      if (product) {
       this.productDetails=product
      } else {
        console.error('No product found with this PID:', this.productPid);
      }
    } else {
      console.error('No product found with this ID:', this.productId);
    }
  }
 


}
