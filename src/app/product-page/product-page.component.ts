import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../Mobile_product-details';  // Your product list

@Component({
  selector: 'app-product-page',
  standalone:false,
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  selectedProductList: any[] = [];
  selectedProductName: string = '';
  selectedProductId: number | null = null; // <-- Add this

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.selectedProductId = idParam ? parseInt(idParam, 10) : null; // <-- Store the ID

    console.log('Selected Product ID:', this.selectedProductId);

    if (this.selectedProductId !== null) {
      const matchedProduct = Products.find(product => product.id === this.selectedProductId);

      if (matchedProduct) {
        const entry = Object.entries(matchedProduct).find(([key]) => key !== 'id');
        if (entry) {
          const [key, value] = entry;
          this.selectedProductName = key;
          this.selectedProductList = Array.isArray(value) ? value : [];
        }
      } else {
        console.warn(`No product found with id: ${this.selectedProductId}`);
      }
    } else {
      console.error('No product ID found in route');
    }
  }
}
