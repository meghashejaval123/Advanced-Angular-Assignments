import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-input-confirmation-dialog',
  templateUrl: './input-confirmation-dialog.component.html',
  styleUrls: ['./input-confirmation-dialog.component.css']
})
export class InputConfirmationDialogComponent {
  userComment: string = '';

  constructor(
    public dialogRef: MatDialogRef<InputConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirmClick(): void {
    this.dialogRef.close(this.userComment);
  }

  onCancelClick(): void {
    this.dialogRef.close(null);
  }
}
