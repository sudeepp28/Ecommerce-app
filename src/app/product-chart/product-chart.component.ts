import { Component } from '@angular/core';

@Component({
  selector: 'app-product-chart',
  standalone:false,
  templateUrl: './product-chart.component.html',
  styleUrl: './product-chart.component.css'
})
export class ProductChartComponent {
 products=[
  {src:'assets/product-chart/top offer.webp',
    span:'Top Offers'
  },
  {src:'assets/product-chart/mobile.webp',
    span:'Mobiles & Tablets'
  },
  {src:'assets/product-chart/appliances.webp',
    span:'Appliances'
  },
  {src:'assets/product-chart/electronics.webp',
    span:'Electronics'
  },
  {src:'assets/product-chart/home&kitchen.webp',
    span:'Home & Kitchen'
  },
  {src:'assets/product-chart/beauty.webp',
    span:'Beauty'
  },
  {src:'assets/product-chart/fashion.webp',
    span:'Fashion'
  },
  {src:'assets/product-chart/furniture.webp',
    span:'Furniture'
  },
  {src:'assets/product-chart/grocery.webp',
    span:'Grocery'
  },
 ]
}
