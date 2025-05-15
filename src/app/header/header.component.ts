import { AfterViewInit, Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone:false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit{
  constructor(private route: Router ) { }

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
isLogin=false
 login(){
  this.isLogin=!this.isLogin
if(this.isLogin){
  this.route.navigate(['signin'])
}else{
  this.route.navigate(['home'])
}
 }
}
