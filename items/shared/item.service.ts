import { AuthService } from './../../users/shared/auth.service';
import { Item } from './item';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';



@Injectable({
  providedIn: 'root'
})
export class ItemService  {
  private itemsURL = '/items';
  items: AngularFireList<any>;

  constructor(private db: AngularFireDatabase, private authSvc: AuthService  ) {
    this.items = db.list(this.itemsURL);
  }

  // READ   
  getItem(param: string): AngularFireObject<Item>{
    return this.db.object('/items/'+param)
  }

  //WRITE
  onSubmit(value: string) {
   return this.items.push({ 
      //KEYS
      text: value, 
      timestamp: Date.now() * -1, 
      key: '',
      createdBy: '',
      active: true,

    }).then(item => {this.items.update( item.key, { key: item.key }); return true});
  }

  // DELETE
  onDelete(item){
    const promise = this.db.list(this.itemsURL+"/"+ Object(item).getAttribute('data-index')).remove();
    promise
    .then(_ => console.log('success'))
    .catch(err => this.handleError(err));
  }

  private handleError(error) {
    console.log(error);
  }
}
