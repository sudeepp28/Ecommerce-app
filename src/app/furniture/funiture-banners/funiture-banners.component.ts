import { Component } from '@angular/core';
import { FurnitureB } from '../furniture-banners';

@Component({
  selector: 'app-funiture-banners',
  standalone:false,
  templateUrl: './funiture-banners.component.html',
  styleUrl: './funiture-banners.component.css'
})
export class FunitureBannersComponent {
  FBanners=FurnitureB
}
