import { ItemService } from '../shared/item.service';
import { Component } from '@angular/core';
import { Item } from '../shared/item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent{

  itemValue:string ;
  items: Observable<Item[]> ;

  constructor(private itmSvc: ItemService) {
    this.items = this.getItems();
  }

  getItems(){
   return this.itmSvc.getItems("AAAA");
  }

  onSubmit() {
    return new Promise((resolve, reject) => {
      this.itmSvc.onSubmit(this.itemValue);
      this.itemValue = '';
    }) 
    
  }

  onDelete(){
    return this.itmSvc.onDelete(event.target) 
  }

}









  