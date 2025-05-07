import { Component } from '@angular/core';
import { MobileService } from '../../mobile.service';

@Component({
  selector: 'app-mflex-board',
  standalone:false,
  templateUrl: './mflex-board.component.html',
  styleUrl: './mflex-board.component.css'
})
export class MFlexBoardComponent {

  flexImages=[
    {id:1,
    src:"assets/Mobile-assets/MBanner1.jpg",
    alt:"MBanner1",
    link:"/product-page/iPhone-16"
    },
   {id:2,
    src:"assets/Mobile-assets/MBanner2.png",
    alt:"MBanner2"

   },
   {id:3,
    src:"assets/Mobile-assets/MBanner3.png",
    alt:"MBanner3"
   }
  ]
  constructor(private mobileService:MobileService){}
  
  selectBanner(id:any){
    this.mobileService.setSelectedProductId(id)
  }
}
