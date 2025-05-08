import { Component } from '@angular/core';
import { MDisplayB } from '../mobileBData';

@Component({
  selector: 'app-mobiles-container',
  standalone: false,
  templateUrl: './mobiles-container.component.html',
  styleUrl: './mobiles-container.component.css'
})
export class MobilesContainerComponent {
  mdisplayB = MDisplayB;

  constructor() {}

  selectBanner(BannerId: number) {
    // Navigate using routerLink, no service logic needed
  }
}