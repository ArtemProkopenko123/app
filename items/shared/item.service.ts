import { Item } from './item';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private heroesUrl = '/items'

  constructor(public db: AngularFireDatabase) {}

  getItems(param:string): Observable<Item[]>{
    return this.db.list<Item>(this.heroesUrl, ref => ref.orderByChild('timestamp')).valueChanges();
  }

  onSubmit(value:string) {
    if(value) {
      this.db.list<Item>(this.heroesUrl).push({ 
        
        content: value, 
        timestamp: Date.now() * -1, 
        key: ''

      }).then((item) => { this.toggleDone(item); });
    } else { }
  }

  toggleDone(item: Item) {
    this.db.object(this.heroesUrl+'/' + item.key).update({ key: item.key });
  }

  onDelete(item){
    this.db.list(this.heroesUrl+"/"+ Object(item).getAttribute('data-index')).remove();
  }


}
