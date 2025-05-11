import { Component } from '@angular/core';
import { AppliancesProduct } from '../appliance_Product';

@Component({
  selector: 'app-appliance-banners',
  standalone:false,
  templateUrl: './appliance-banners.component.html',
  styleUrl: './appliance-banners.component.css'
})
export class ApplianceBannersComponent {
   appliancesBanner=AppliancesProduct
}
