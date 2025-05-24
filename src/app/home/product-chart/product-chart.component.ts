import { Component, EventEmitter, Output } from '@angular/core';

interface Product {
  src: string;
  span: string;
  link: string;
  dropDown?: { category: string; link: string }[];
}

@Component({
  selector: 'app-product-chart',
  standalone: false,
  templateUrl: './product-chart.component.html',
  styleUrl: './product-chart.component.css'
})
export class ProductChartComponent {
  products: Product[] = [
    { src: 'assets/product-chart/top offer.webp', span: 'Top Offers', link: '' },
    { src: 'assets/product-chart/mobile.webp', span: 'Mobiles & Tablets', link: '/mobiles' },
    { src: 'assets/product-chart/appliances.webp', span: 'Appliances', link: '/appliance' },
    { src: 'assets/product-chart/Toy.avif', span: 'Toys', link: '/toys' },
    { src: 'assets/product-chart/beauty.webp', span: 'Beauty, Books ', link: '',
      dropDown:[
        { category: 'Beauty', link: '/beauty' },
        { category: 'Books', link: '/books' },
        
      ]
     },
    {
      src: 'assets/product-chart/fashion.webp',
      span: 'Fashion',
      link: '',
      dropDown: [
        { category: 'Mens', link: '/mens' },
        { category: 'Womens', link: '/womens' },
        { category: 'Kids', link: '/kids' }
      ]
    },
    { src: 'assets/product-chart/furniture.webp', span: 'Furniture', link: '/furniture' },
    { src: 'assets/product-chart/grocery.webp', span: 'Grocery', link: '/grocery', }
  ];

  @Output() open = new EventEmitter();

  onShowSelectedProduct() {
    this.open.emit();
  }
}
