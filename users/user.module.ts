import { UkrCitysService } from './../sys-services/ukr-citys.service';



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment} from '../../environments/environment';

import { AuthComponent } from './auth/auth.component';
import { AuthService } from './shared/auth.service';
import { NgxCaptchaModule } from 'ngx-captcha';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AuthComponent,
    UserProfileComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    NgxCaptchaModule.forRoot({
      reCaptcha2SiteKey: '6LfvrWEUAAAAACgxPFDdJdxvYNNEokznSMdC6k2I'
    }),
    HttpClientModule,
    ReactiveFormsModule
    
  ],

  providers: [AuthService, UkrCitysService],

  exports : [
    AuthComponent
  ],
  bootstrap: [AuthComponent]
})
export class UserModule { }
