import { AuthService } from './../../users/shared/auth.service';
import { ItemService } from '../shared/item.service';
import { Component} from '@angular/core';
import { Item } from '../shared/item';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {
  private items: Item[] = null;
  constructor(private itmSvc: ItemService, private authSvc: AuthService) { 
    itmSvc.items.valueChanges().subscribe(val => this.items = val);
    this.authSvc.currentUserObservable().subscribe(authVal => {
      if(!authVal)  { window.location.replace('/login'); }
    });
  }

  onDelete(){
    return this.itmSvc.onDelete(event.target) 
  }

}









  