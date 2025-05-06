import { Component, Input } from '@angular/core';
import { MobileService } from '../Mobile/mobile.service';

@Component({
  selector: 'app-mobiles-container',
  standalone:false,
  templateUrl: './mobiles-container.component.html',
  styleUrl: './mobiles-container.component.css'
})
export class MobilesContainerComponent {
constructor(private mobileService:MobileService){}

get banners(){
  return this.mobileService.MDisplayB
}
}
