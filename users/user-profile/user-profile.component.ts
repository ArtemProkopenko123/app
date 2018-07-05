import { UserData } from './../shared/user-data';

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { UkrCitysService } from '../../sys-services/ukr-citys.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  private  user: firebase.User;
  userData = new UserData();
  constructor(public authService: AuthService, private citySvc: UkrCitysService) {

  }

  ngOnInit() {
    this.authService.user.subscribe(val => {this.user = val; this.userData.UserID = val.uid;});
  }

  onSubmit(UserData){
    this.userData.UserID = this.user.uid;
    console.log(this.userData)
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
