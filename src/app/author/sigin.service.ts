import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
@Injectable({providedIn:'root'})

export class SiginService{
isLogin=false
constructor(private route:Router){}
    openLogin(){
       this.isLogin=!this.isLogin
if(this.isLogin){
  this.route.navigate(['signin'])
  if(this.iscart===true){
    this.iscart=false
  }
}else{
  this.route.navigate(['home'])
} 
    }
     iscart=false

    openCart(){
       this.iscart=!this.iscart
if(this.iscart){
  this.route.navigate(['cart'])
  if(this.isLogin===true){
    this.isLogin=false
  }
}else{
  this.route.navigate(['home'])
} 
    }


    onLogin(loginEmail:string,loginPassword:string){
if (loginEmail && loginPassword) {
      alert('Login successful!');
      this.route.navigate(['home'])
      this.isLogin=false

    } else {
      alert('Please enter email and password.');
    }
    }

    onRegister(registerUserName:string,registerEmail:string,registerPassword:string){
        if (registerUserName && registerEmail && registerPassword) {
      alert('Registration successful!');
      this.route.navigate(['signin'])
       // Switch to login after successful registration
    } else {
      alert('Please fill in all fields.');
    }
    }
   
}