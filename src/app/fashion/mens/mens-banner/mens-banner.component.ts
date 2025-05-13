import { Component } from '@angular/core';
import { MensB } from '../menBanners';

@Component({
  selector: 'app-mens-banner',
  standalone:false,
  templateUrl: './mens-banner.component.html',
  styleUrl: './mens-banner.component.css'
})
export class MensBannerComponent {
  mensBanner=MensB
}
