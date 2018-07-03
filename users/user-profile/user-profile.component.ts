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

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  private  user: firebase.User;
  userData = new UserData();
  constructor(public authService: AuthService) {

  }

  ngOnInit() {
    this.authService.user.subscribe(val => {this.user = val; console.log(val)});
  }

  onSubmit(UserData){
    console.log(this.userData)
  }
}
