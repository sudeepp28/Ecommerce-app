import { Component } from '@angular/core';
import { WomensB } from './womensBanner';

@Component({
  selector: 'app-womens',
  standalone:false,
  templateUrl: './womens.component.html',
  styleUrl: './womens.component.css'
})
export class WomensComponent {
WBanner=WomensB
}
