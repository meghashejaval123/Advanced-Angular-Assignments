import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeDetectComponent } from './change-detect/change-detect.component';
import { LiveNewsComponent } from './live-news/live-news.component';
import { HighlightDirective } from './highlight.directive';
import { WrapTextPipe } from './wraptext.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { AddCustomerByTplFrmComponent } from './add-customer-by-tpl-frm/add-customer-by-tpl-frm.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCustomerByRctFrmComponent } from './add-customer-by-rct-frm/add-customer-by-rct-frm.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserListingComponent } from './user-listing/user-listing.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { Routes } from '@angular/router';
import { AuthInterceptor } from './auth-interceptor.service';
import { MyDemoCompComponent } from './my-demo-comp/my-demo-comp.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { InputConfirmationDialogComponent } from './input-confirmation-dialog/input-confirmation-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderDialogComponent } from './loader-dialog/loader-dialog.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { StepperComponent } from './stepper/stepper.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent } from './dialog/dialog.component';
import { SortingTableComponent } from './sorting-table/sorting-table.component';
import { ChipsComponent } from './chips/chips.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatStepperModule } from '@angular/material/stepper';
// import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { ExpandableTableComponent } from './expandable-table/expandable-table.component';
import { AutocompleteDemoComponent } from './autocomplete-demo/autocomplete-demo.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ImageListComponent } from './image-list/image-list.component';


const routes: Routes = [
  { path: 'user-listing', component: UserListingComponent },
  { path: 'user-detail/:id', component: UserDetailComponent },
  { path: 'edit-detail/:id', component: EditDetailComponent },
  { path: '', redirectTo: '/user-listing', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ChangeDetectComponent,
    LiveNewsComponent,
    HighlightDirective,
    WrapTextPipe,
    FormatDatePipe,
    AddCustomerByTplFrmComponent,
    AddCustomerByRctFrmComponent,
    RegistrationFormComponent,
    UserListingComponent,
    UserDetailComponent,
    EditDetailComponent,
    DeleteConfirmationComponent,
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
    BasicTableComponent,
    DynamicTableComponent,
    ExpandableTableComponent,
    AutocompleteDemoComponent,
    AutocompleteComponent,
    ImageListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatSelectModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
  

})
export class AppModule { }
