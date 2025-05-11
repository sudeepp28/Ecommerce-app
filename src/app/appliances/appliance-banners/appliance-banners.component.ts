import { Component } from '@angular/core';
import { AppliancesBanner } from '../appliance_banner';

@Component({
  selector: 'app-appliance-banners',
  standalone:false,
  templateUrl: './appliance-banners.component.html',
  styleUrl: './appliance-banners.component.css'
})
export class ApplianceBannersComponent {
  ABanners=AppliancesBanner
}
