import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone:false,
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})



export class SliderComponent implements OnInit {
  images = [
    { src: 'assets/banner1.jpg', alt: 'Image 1' },
    { src: 'assets/banner2.jpg', alt: 'Image 2' },
    { src: 'assets/banner3.jpg', alt: 'Image 3' },
    { src: 'assets/banner4.jpg', alt: 'Image 4' },
    { src: 'assets/banner5.jpg', alt: 'Image 5' }
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

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.slide();
  }
}

