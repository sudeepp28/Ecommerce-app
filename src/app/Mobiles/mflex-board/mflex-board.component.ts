import { Component } from '@angular/core';

@Component({
  selector: 'app-mflex-board',
  standalone:false,
  templateUrl: './mflex-board.component.html',
  styleUrl: './mflex-board.component.css'
})
export class MFlexBoardComponent {

  flexImages=[
    {
    src:"assets/Mobile-assets/MBanner1.jpg",
    alt:"MBanner1"
    },
   {
    src:"assets/Mobile-assets/MBanner2.png",
    alt:"MBanner2"

   },
   {
    src:"assets/Mobile-assets/MBanner3.png",
    alt:"MBanner3"
   }
  ]
}
