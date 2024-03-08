import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { InputConfirmationDialogComponent } from '../input-confirmation-dialog/input-confirmation-dialog.component';
import { LoaderDialogComponent } from '../loader-dialog/loader-dialog.component';

@Component({
  selector: 'app-my-demo-comp',
  templateUrl: './my-demo-comp.component.html',
  styleUrls: ['./my-demo-comp.component.css']
})
export class MyDemoCompComponent {
  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

  showAlert() {
    alert('This is a well-formatted alert!');
  }

  showToast() {
    this.snackBar.open('This is a valid message', 'Dismiss', {
      duration: 3000,
    });
  }


  showLoader() {
    const dialogRef = this.dialog.open(LoaderDialogComponent, {
      disableClose: true,
      panelClass: 'transparent',
    });

    setTimeout(() => {
      dialogRef.close();
    }, 3000);
  }

  
  showConfirm() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Are you sure you want to proceed?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        // Handle confirm action
        console.log('User clicked on Okay');
      } else {
        // Handle cancel action
        console.log('User clicked on Cancel');
      }
    });
  }

  showInputConfirm() {
    const dialogRef = this.dialog.open(InputConfirmationDialogComponent, {
      data: {
        message: 'Please provide your comment:',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Handle confirm action with comment
        console.log('User clicked on Okay with comment:', result);
      } else {
        // Handle cancel action
        console.log('User clicked on Cancel');
      }
    });
  }
}
