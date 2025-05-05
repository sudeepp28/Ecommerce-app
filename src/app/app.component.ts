import { AfterViewInit, Component } from '@angular/core';



@Component({
  selector: 'app-root',
  standalone: false,
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
 
  constructor() { }

  ngAfterViewInit(): void {
    this.adjustBodyPadding();
  }

  adjustBodyPadding(): void {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    const body = document.body;
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    body.style.paddingTop = navbarHeight + 'px';
  }
}
