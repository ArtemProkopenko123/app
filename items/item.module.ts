

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ItemsListComponent } from './items-list/items-list.component';
import { environment} from '../../environments/environment';
import { ItemService } from './shared/item.service';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ItemsListComponent,
    ItemCreateComponent,
    ItemDetailComponent
  ],

  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database

    
  ],

  providers: [ItemService],

  exports : [
    ItemsListComponent
  ],
})
export class ItemModule { }



