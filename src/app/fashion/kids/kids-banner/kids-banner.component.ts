import { Component, OnInit } from '@angular/core';
import { KidsB } from '../kidsbanner';

@Component({
  selector: 'app-kids-banner',
  standalone: false,
  templateUrl: './kids-banner.component.html',
  styleUrl: './kids-banner.component.css'
})
export class KidsBannerComponent implements OnInit {
  selectedCategory: 'boys' | 'girls' = 'boys';
  filteredBanners: any[] = [];

  ngOnInit(): void {
    const storedCategory = localStorage.getItem('selectedCategory');
    if (storedCategory === 'boys' || storedCategory === 'girls') {
      this.selectedCategory = storedCategory;
    }
    this.filterBanners();
  }

  selectCategory(category: 'boys' | 'girls') {
    this.selectedCategory = category;
    localStorage.setItem('selectedCategory', category); // Save to localStorage
    this.filterBanners();
  }

  filterBanners(): void {
    this.filteredBanners = KidsB.filter(item => 
      this.selectedCategory === 'boys'
        ? item.name.startsWith('Boys')
        : item.name.startsWith('Girls')
    );
  }
}
