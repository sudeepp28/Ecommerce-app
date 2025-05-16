import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SiginService } from '../sigin.service';




@Component({
  selector: 'app-signin',
standalone:false,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  constructor(private router:Router,private signinService:SiginService){}



  // Login fields
  loginEmail = '';
  loginPassword = '';



toggleMode() {
    this.router.navigate(['register'])
  }
  onLogin() {
    this.signinService.onLogin(this.loginEmail, this.loginPassword)
  }

 }
