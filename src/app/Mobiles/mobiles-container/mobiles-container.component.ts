import { Component, Input } from '@angular/core';

import { MDisplayB } from '../Mobile/mobileBData';

@Component({
  selector: 'app-mobiles-container',
  standalone:false,
  templateUrl: './mobiles-container.component.html',
  styleUrl: './mobiles-container.component.css'
})
export class MobilesContainerComponent {
mdisplayB=MDisplayB

onSelectProduct(){
  
}

}
