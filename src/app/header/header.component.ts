import { AfterViewInit, Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { SiginService } from '../author/sigin.service';
import { CartService } from '../cart/cart.service';



@Component({
  selector: 'app-header',
  standalone:false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit{
  constructor(private route: Router, private signinService:SiginService , private cartService:CartService) { }

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

 login(){
  this.signinService.openLogin()
 }
 openCart(){
  this.signinService.openCart()
 }

}
