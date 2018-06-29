


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment} from '../../environments/environment';

import { AuthComponent } from './auth/auth.component';
import { AuthService } from './shared/auth.service';


@NgModule({
  declarations: [
    AuthComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],

  providers: [AuthService],

  exports : [
    AuthComponent
  ],
  bootstrap: [AuthComponent]
})
export class UserModule { }
