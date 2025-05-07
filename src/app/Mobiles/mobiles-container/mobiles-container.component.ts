import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MDisplayB } from '../mobileBData';
import { MobileService } from '../../mobile.service';



@Component({
  selector: 'app-mobiles-container',
  standalone:false,
  templateUrl: './mobiles-container.component.html',
  styleUrl: './mobiles-container.component.css'
})
export class MobilesContainerComponent {
mdisplayB=MDisplayB

constructor(private mobileService:MobileService){}

selectBanner(BannerId:any){
  this.mobileService.setSelectedProductId(BannerId)
}
}
