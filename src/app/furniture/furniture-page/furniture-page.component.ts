import { Component } from '@angular/core';
import { FurnitureDetails } from '../furniture-Details';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-furniture-page',
  standalone:false,
  templateUrl: './furniture-page.component.html',
  styleUrl: './furniture-page.component.css'
})
export class FurniturePageComponent {
 selectedProductId: number | null = null; 
  Products=FurnitureDetails
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
