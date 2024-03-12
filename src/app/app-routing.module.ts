import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListingComponent } from './user-listing/user-listing.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EditDetailComponent } from './edit-detail/edit-detail.component';






const routes: Routes = [
  { path: 'user-listing', component: UserListingComponent },
  { path: 'user-detail/:id', component: UserDetailComponent },
  { path: 'edit-detail/:id', component: EditDetailComponent },
  { path: '', redirectTo: '/user-listing', pathMatch: 'full' },
  { path: '**', redirectTo: '/not-found' }, 
 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
