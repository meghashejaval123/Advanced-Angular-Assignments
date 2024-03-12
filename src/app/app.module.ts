import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { FormatDatePipe } from './format-date.pipe';
import { WraptextPipe } from './wraptext.pipe';
import { ChangeDetectComponent } from './change-detect/change-detect.component';
import { LiveNewsComponent } from './live-news/live-news.component';
import { HighlightDirective } from './highlight.directive';
import { AddCustomerByTplFrmComponent } from './add-customer-by-tpl-frm/add-customer-by-tpl-frm.component';
import { AddCustomerByRctFrmComponent } from './add-customer-by-rct-frm/add-customer-by-rct-frm.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { UserListingComponent } from './user-listing/user-listing.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { Routes } from '@angular/router';
import { MyDemoCompComponent } from './my-demo-comp/my-demo-comp.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { InputConfirmationDialogComponent } from './input-confirmation-dialog/input-confirmation-dialog.component';
import { LoaderDialogComponent } from './loader-dialog/loader-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculatorComponent } from './calculator/calculator.component';
import { StepperComponent } from './stepper/stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { DialogComponent } from './dialog/dialog.component';
import { SortingTableComponent } from './sorting-table/sorting-table.component';
import { ChipsComponent } from './chips/chips.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatTableDataSource} from '@angular/material/table';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { ExpandableTableComponent } from './expandable-table/expandable-table.component';
import { AutocompleteDemoComponent } from './autocomplete-demo/autocomplete-demo.component';
import { ImageListComponent } from './image-list/image-list.component';
import { MatListModule } from '@angular/material/list';




const routes: Routes = [
  { path: 'user-listing', component: UserListingComponent },
  { path: 'user-detail/:id', component: UserDetailComponent },
  { path: 'edit-detail/:id', component: EditDetailComponent },
  { path: '', redirectTo: '/user-listing', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    TableDemoComponent,
    FormatDatePipe,
    WraptextPipe,
    ChangeDetectComponent,
    LiveNewsComponent,
    HighlightDirective,
    AddCustomerByTplFrmComponent,
    AddCustomerByRctFrmComponent,
    RegistrationFormComponent,
    UserListingComponent,
    UserDetailComponent,
    EditDetailComponent,
    MyDemoCompComponent,
    ConfirmationDialogComponent,
    InputConfirmationDialogComponent,
    LoaderDialogComponent,
    CalculatorComponent,
    StepperComponent,
    DatepickerComponent,
    DialogComponent,
    SortingTableComponent,
    ChipsComponent,
    SidenavComponent,
    MyDialogComponent,
    DynamicTableComponent,
    ExpandableTableComponent,
    AutocompleteDemoComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatStepperModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
      // _CdkColumnDef
    },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
