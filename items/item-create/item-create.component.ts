import { AuthService } from './../../users/shared/auth.service';
import { Component } from '@angular/core';
import { ItemService } from '../shared/item.service';


@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent  {
  private itemValue:string ;
  private success :boolean = false
  constructor(private itmSvc: ItemService, private authSvc: AuthService) { }

  onSubmit() { 
    this.itmSvc.onSubmit(this.itemValue).then(value => {
      if(value){
        this.itemValue = ''; 
        this.success = true;
        setTimeout(() => {
          this.success = false; 
        }, 3000);
      }
    })
  }
  
}
