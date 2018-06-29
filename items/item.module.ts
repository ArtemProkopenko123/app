


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ItemsListComponent } from './items-list/items-list.component';
import { environment} from '../../environments/environment';

@NgModule({
  declarations: [
    ItemsListComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],

  providers: [],

  exports : [
    ItemsListComponent
  ],
})
export class ItemModule { }



