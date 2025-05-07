import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-slider',
  standalone: false,
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
  constructor(private router: Router) {}

  onBannerSelected(image: any) {
    const bannerId = image.id; // assuming each image has a unique `id`
    this.router.navigate(['/product-page', bannerId]);
  }
}
