import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  standalone: false,
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit, OnDestroy {
  images = [
    { src: 'assets/banner1.jpg', alt: 'Image 1', link:"/mens" },
    { src: 'assets/banner2.jpg', alt: 'Image 2',link:"/kids" },
    { src: 'assets/banner3.jpg', alt: 'Image 3',link:"/womens" },
    { src: 'assets/banner4.jpg', alt: 'Image 4', link:"/mobiles" },
    { src: 'assets/banner5.jpg', alt: 'Image 5', link:"/appliance" }
  ];

  constructor(private router :Router ){

  }
  current = 0;
  private intervalId: any;

  ngAfterViewInit(): void {
    this.startSlider();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startSlider(): void {
    this.intervalId = setInterval(() => {
      this.slide();
    }, 3000);
  }

  slide(): void {
    const slider = document.getElementById('slider');
    const container = document.getElementById('image-container');
    if (slider && container) {
      const width = container.clientWidth;
      this.current++;
      slider.style.transition = 'transform 0.5s ease-in-out';
      slider.style.transform = `translateX(-${width * this.current}px)`;

      if (this.current === this.images.length) {
        setTimeout(() => {
          slider.style.transition = 'none';
          slider.style.transform = 'translateX(0)';
          this.current = 0;
        }, 500);
      }
    }
  }
  
}
