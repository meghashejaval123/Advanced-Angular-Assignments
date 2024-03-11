import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css']
})
export class BasicTableComponent implements OnInit {
  dataSource = [
    { position: 1, name: 'John Doe', age: 30 },
    { position: 2, name: 'Jane Doe', age: 25 },
    { position: 3, name: 'Jane Doe', age: 25 },
    { position: 4, name: 'Jane Doe', age: 25 },
    { position: 5, name: 'Jane Doe', age: 25 },
    
  ];

  displayedColumns: string[] = ['position', 'name', 'age'];
  constructor() { }

  ngOnInit(): void {
  }

}
