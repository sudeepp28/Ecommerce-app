import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
standalone:false,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  constructor(private router:Router){}

 isLoginMode = true;

  // Login fields
  loginEmail = '';
  loginPassword = '';

  // Register fields
  registerName = '';
  registerEmail = '';
  registerPassword = '';
  registerUserName='';
 
  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onLogin() {
    if (this.loginEmail && this.loginPassword) {
      alert('Login successful!');
      this.router.navigate(['home'])
    } else {
      alert('Please enter email and password.');
    }
  }

  onRegister() {
    if (this.registerUserName && this.registerEmail && this.registerPassword) {
      alert('Registration successful!');
      this.toggleMode(); // Switch to login after successful registration
    } else {
      alert('Please fill in all fields.');
    }
  }}
