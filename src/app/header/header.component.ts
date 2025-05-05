import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone:false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit{
  constructor() { }

  ngAfterViewInit(): void {
    this.adjustBodyPadding();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.adjustBodyPadding();
  }

  adjustBodyPadding(): void {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    const body = document.body;
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    body.style.paddingTop = navbarHeight + 'px';
  }
}
