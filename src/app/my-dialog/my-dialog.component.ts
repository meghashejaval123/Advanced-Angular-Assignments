import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrl: './my-dialog.component.css'
})
export class MyDialogComponent {
  constructor(public dialogRef: MatDialogRef<MyDialogComponent>) { }

  ngOnInit(): void {
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

}
