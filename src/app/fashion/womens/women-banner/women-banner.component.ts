import { Component } from '@angular/core';
import { WomensB } from '../womensBanner';

@Component({
  selector: 'app-women-banner',
  standalone:false,
  templateUrl: './women-banner.component.html',
  styleUrl: './women-banner.component.css'
})
export class WomenBannerComponent {
  wBanner=WomensB
}
