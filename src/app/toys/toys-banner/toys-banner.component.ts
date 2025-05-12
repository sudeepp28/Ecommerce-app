import { Component } from '@angular/core';
import { ToysBanner } from '../toys-banner';

@Component({
  selector: 'app-toys-banner',
 standalone:false,
  templateUrl: './toys-banner.component.html',
  styleUrl: './toys-banner.component.css'
})
export class ToysBannerComponent {
   toysBanner=ToysBanner
}
