import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-page',
  standalone: false,
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnDestroy {
  selectedBannerId: string | null = null;
  private routeSub: Subscription | undefined;

  constructor(private route: ActivatedRoute) {
    // Subscribe to the route parameters
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.selectedBannerId = params.get('id');  // 'id' matches the parameter in the URL
    });
  }

  ngOnDestroy() {
    // Unsubscribe from the route subscription to prevent memory leaks
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
