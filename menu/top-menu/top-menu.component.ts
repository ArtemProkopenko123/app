
import { AuthService } from './../../users/shared/auth.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent  {

  
  constructor(private authSvc: AuthService) { }

}
