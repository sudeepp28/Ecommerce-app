import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MDisplayB } from '../mobileBData';



@Component({
  selector: 'app-mobiles-container',
  standalone:false,
  templateUrl: './mobiles-container.component.html',
  styleUrl: './mobiles-container.component.css'
})
export class MobilesContainerComponent {
mdisplayB=MDisplayB

@Output() product=new EventEmitter()
onSelectProduct(image:any){
  
  this.product.emit(image)
}

}
