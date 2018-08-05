import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ItemModule } from './items/item.module';
import { UserModule } from './users/user.module';
import { AppRouterModule } from './app-routing.module';
import { TopMenuComponent } from './menu/top-menu/top-menu.component';
import { AngularFireStorageModule } from '../../node_modules/angularfire2/storage';



@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRouterModule,
    ItemModule,
    UserModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

