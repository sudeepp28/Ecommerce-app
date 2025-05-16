import { Component } from '@angular/core';
import { BooksBanners } from './BooksBanners';

@Component({
  selector: 'app-books',
  standalone:false,
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
booksB=BooksBanners
}
