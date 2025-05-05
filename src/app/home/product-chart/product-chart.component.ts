import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-chart',
  standalone:false,
  templateUrl: './product-chart.component.html',
  styleUrl: './product-chart.component.css'
})
export class ProductChartComponent {
 products=[
  {src:'assets/product-chart/top offer.webp',
    span:'Top Offers',
    link:""
  },
  {src:'assets/product-chart/mobile.webp',
    span:'Mobiles & Tablets',
     link:"/Mobile"
  },
  {src:'assets/product-chart/appliances.webp',
    span:'Appliances',
    link:""
  },
  {src:'assets/product-chart/electronics.webp',
    span:'Electronics',
     link:""
  },
  {src:'assets/product-chart/home&kitchen.webp',
    span:'Home & Kitchen',
     link:""
  },
  {src:'assets/product-chart/beauty.webp',
    span:'Beauty',
    link:""

  },
  {src:'assets/product-chart/fashion.webp',
    span:'Fashion',
    link:""
  },
  {src:'assets/product-chart/furniture.webp',
    span:'Furniture',
    link:""
  },
  {src:'assets/product-chart/grocery.webp',
    span:'Grocery',
    link:""
  },
 ]

 @Output() open=new EventEmitter()

 onShowSelectedProduct(){
  this.open.emit()
 }
}
