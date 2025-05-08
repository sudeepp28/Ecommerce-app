import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router module

@Component({
  selector: 'app-mflex-board',
  standalone: false,
  templateUrl: './mflex-board.component.html',
  styleUrls: ['./mflex-board.component.css']
})
export class MFlexBoardComponent {

  flexImages = [
    {
      id: 1,
      src: "assets/Mobile-assets/MBanner1.jpg",
      alt: "MBanner1",
      // Initially leave the link empty
      link: ''
    },
    {
      id: 2,
      src: "assets/Mobile-assets/MBanner2.png",
      alt: "MBanner2",
      link: ''
    },
    {
      id: 3,
      src: "assets/Mobile-assets/MBanner3.png",
      alt: "MBanner3",
      link: ''
    }
  ];

  constructor(private router: Router) {}

  // Method to handle the image click and navigate to the dynamically set route
  navigateToProduct(id: number) {
    // Dynamically create the route using the product id
    this.router.navigate([`/product-page/${id}`]);
  }
}
