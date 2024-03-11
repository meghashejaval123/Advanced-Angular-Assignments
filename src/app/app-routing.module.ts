import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { ExpandableTableComponent } from './expandable-table/expandable-table.component';


const routes: Routes = [
    { path: 'user-listing', component: UserListingComponent },
    { path: 'user-detail/:id', component: UserDetailComponent },
    { path: 'edit-detail/:id', component: EditDetailComponent },
    { path: '', redirectTo: '/user-listing', pathMatch: 'full' },
    { path: '**', redirectTo: '/not-found' }, 
    { path: 'basic-table', component: BasicTableComponent },
    { path: 'dynamic-table', component: DynamicTableComponent },
    { path: 'expandable-table', component: ExpandableTableComponent },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
