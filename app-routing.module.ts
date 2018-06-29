import { AuthComponent } from './users/auth/auth.component';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsListComponent } from './items/items-list/items-list.component';


const routes: Routes = [
    { path: '',  redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: ItemsListComponent},
    { path: 'user', component: AuthComponent},
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
}) 

export class AppRouterModule {}