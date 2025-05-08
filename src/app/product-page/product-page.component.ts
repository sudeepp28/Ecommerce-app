import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../Mobile_product-details';  // Ensure this path is correct

@Component({
  selector: 'app-product-page',
  standalone: false,
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  selectedProductList: any[] = [];
  selectedProductName: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get the 'id' from the route params
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Product ID from route:', id);  // Log the id to the console

    if (id) {
      // Convert id to number for matching
      const matchedProduct = Products.find(p => p.id === Number(id));

      if (matchedProduct) {
        const [key, value] = Object.entries(matchedProduct).find(([k]) => k !== 'id')!;
        this.selectedProductName = key;
        this.selectedProductList = value;
      } else {
        console.log('No product found for the ID:', id);
      }
    } else {
      console.log('No ID found in the route');
    }
  }
}
