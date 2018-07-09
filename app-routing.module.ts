import { ItemsListComponent } from './items/items-list/items-list.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { AuthComponent } from './users/auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCreateComponent } from './items/item-create/item-create.component';


const routes: Routes = [
    { path: '',  redirectTo: '/my-posts', pathMatch: 'full'},
    { path: 'my-post',          component: ItemsListComponent},
    { path: 'add-new-post',     component: ItemCreateComponent},
    { path: 'login',            component: AuthComponent},
    { path: 'my-posts/detail',  component: ItemDetailComponent},
    { path: 'profile',          component: UserProfileComponent},

    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
}) 

export class AppRouterModule {}