import { UserData } from './../shared/user-data';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { UkrCitysService } from '../../sys-services/ukr-citys.service';
import { CrudDBService } from '../../sys-services/crud-db.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  private userData: UserData ;
  private formData: FormGroup;
  private user: firebase.User = null;
  private userId: string = null;
  constructor(public authService: AuthService, private citySvc: UkrCitysService, private crudDB: CrudDBService,private fb: FormBuilder) {

  }

  ngOnInit() {
    this.authService.user.subscribe(authVal => {
      if(authVal){console.log("ENTER");
        this.user = authVal;
        this.userId = authVal.uid;
        this.crudDB.getUserData(authVal.uid)
        .valueChanges().
         subscribe(val  => {this.userData = val;this.initForm();});
      } else  { window.location.replace('/login'); }
    });

  }
 
  initForm(){
    this.formData = this.fb.group({
      UserID : this.userId,
      First_Name: [this.userData.First_Name, [
        Validators.required,
        Validators.pattern(/[А-я]/),
        Validators.minLength(2),
        ]
      ],
      Last_Name: [this.userData.Last_Name, [
        Validators.required,
        Validators.pattern(/[А-я]/),
        Validators.minLength(2),
        ]
      ],
      Phone: [this.userData.Phone, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(15),
        ]
      ],
      City:  [this.userData.City, [
          Validators.required
        ]
      ],
      Contact_Address: this.userData.Contact_Address,
      User_Role: this.userData.User_Role,
    });
  }
    /** Phone field pattern */ 
   keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
    /** Проверяем форму на валидность */ 
  isControlInvalid(controlName: string): boolean {
    const control = this.formData.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }
  onSubmit() {
    const controls = this.formData.controls;
    /** Проверяем форму на валидность */ 
    if (this.formData.invalid) {
    /** Если форма не валидна, то помечаем все контролы как touched*/
    Object.keys(controls)
      .forEach(controlName => controls[controlName].markAsTouched());
      /** Прерываем выполнение метода*/
      return;
    }
    /** TODO: Обработка данных формы */
    this.crudDB.updateData(this.user.uid, this.formData.value, 'user');
  }

}
