import { Component } from '@angular/core';
import { BeautyBanners } from './beautyBanners';

@Component({
  selector: 'app-beauty',
  standalone:false,
  templateUrl: './beauty.component.html',
  styleUrl: './beauty.component.css'
})
export class BeautyComponent {
  beautyBanners=BeautyBanners
}
