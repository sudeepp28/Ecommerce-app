import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-mslider',
 standalone:false,
  templateUrl: './mslider.component.html',
  styleUrl: './mslider.component.css'
})
export class MSliderComponent implements OnInit {
  images = [
    { src: 'assets/Mobile-assets/MBanner1.jpg', alt: 'Image 1' },
    { src: 'assets/Mobile-assets/MBanner2.png', alt: 'Image 3' },
    { src: 'assets/Mobile-assets/MBanner3.png', alt: 'Image 4' },
    
  ];

  current = 0;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.slide();
    }, 3000);
  }

  slide() {
    const slider = document.getElementById('slider');
    if (slider) {
      const container = document.getElementById('image-container');
      const width = container ? container.clientWidth : 0;
      this.current++;
      slider.style.transition = 'transform 0.5s ease-in-out';
      slider.style.transform = `translateX(-${width * this.current}px)`;

      // After the last image, reset to the first image
      if (this.current === this.images.length) {
        setTimeout(() => {
          slider.style.transition = 'none';
          slider.style.transform = 'translateX(0)';
          this.current = 0;
        }, 500);
      }
    }
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event) {
  //   this.slide();
  // }
}

