import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {
  dataSource = [
    { position: 1, name: 'John Doe', age: 30 },
    { position: 2, name: 'Jane Doe', age: 25 },
    // Add more initial data as needed
  ];
  displayedColumns: string[] = ['position', 'name', 'age'];
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  // addRow() {
  //   const newPosition = this.dataSource.length + 1;
  //   const newName = `New Person ${newPosition}`;
  //   const newAge = Math.floor(Math.random() * 50) + 20; // Random age between 20 and 70

  //   this.dataSource.push({ position: newPosition, name: newName, age: newAge });
  // }


  addRow() {
    console.log('Before Adding Row:', this.dataSource);
    
    const newPosition = this.dataSource.length + 1;
    const newName = `New Person ${newPosition}`;
    const newAge = Math.floor(Math.random() * 50) + 20;
  
    this.dataSource.push({ position: newPosition, name: newName, age: newAge });
  
    console.log('After Adding Row:', this.dataSource);
    this.cdr.detectChanges(); 
  }


  // Remove the last row from the table
  removeRow() {
    this.dataSource.pop();
  }

  // Shuffle the order of rows in the table
  shuffleRows() {
    console.log('Before Shuffling:', this.dataSource);
    this.dataSource = this.shuffleArray(this.dataSource);
    console.log('After Shuffling:', this.dataSource);  }

  // Helper function to shuffle an array
  private shuffleArray(array: any[]) {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }
 

}
