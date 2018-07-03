import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  private email: string;
  private password: string;
  private area = true;
  private recaptcha = false;

  constructor(public authService: AuthService) {}

  ngOnInit(){

  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
     this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }

  handleSuccess(){
    this.recaptcha = true;
  }

  handleExpire(){}

  toggleTab(value){
    if(this.area !== value ){
      this.area = value;
      this.email = this.password = '';
    }

  }
  focusFunction(event){
    if(!event.target.validity.valid) event.target.classList.remove('error');
  }
  focusOutFunction(event){
    if(!event.target.validity.valid) event.target.classList.add('error');
  }
}
