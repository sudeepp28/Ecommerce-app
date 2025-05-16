import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SiginService } from '../sigin.service';


@Component({
  selector: 'app-register',
  standalone:false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private route:Router,
    private signinService:SiginService
  ){}
  toggleMode(){
    this.route.navigate(['signin'])
  }
  // Register fields
  registerName = '';
  registerEmail = '';
  registerPassword = '';
  registerUserName='';
  onRegister() {
   this.signinService.onRegister(this.registerUserName,this.registerEmail,this.registerPassword)
  }
}
