import { Component, OnInit } from '@angular/core';
import { WomenProductDetails } from '../womensProduct-details';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-women-page',
  standalone:false,
  templateUrl: './women-page.component.html',
  styleUrl: './women-page.component.css'
})
export class WomenPageComponent implements OnInit {
 selectedProductId: number | null = null; 
  Products=WomenProductDetails
   selectedProductName: string = '';
   selectedProductList: any[] = [];
  constructor(private route: ActivatedRoute){}

   ngOnInit(): void {
     const idParam = this.route.snapshot.paramMap.get('id');
     this.selectedProductId = idParam ? parseInt(idParam, 10) : null; // <-- Store the ID
 
    
 
     if (this.selectedProductId !== null) {
       const matchedProduct = this.Products.find(product => product.id === this.selectedProductId);
 
       if (matchedProduct) {
         const entry = Object.entries(matchedProduct).find(([key]) => key !== 'id');
         if (entry) {
           const [key, value] = entry;
           this.selectedProductName = key;
           this.selectedProductList = Array.isArray(value) ? value : [];

           console.log(this.selectedProductList)
         }
       } else {
         console.warn(`No product found with id: ${this.selectedProductId}`);
       }
     } else {
       console.error('No product ID found in route');
     }
   }
}
