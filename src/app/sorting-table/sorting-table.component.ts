import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface UserData {
  id: string;
  name: string;
  progress: string;
}
@Component({
  selector: 'app-sorting-table',
  templateUrl: './sorting-table.component.html',
  styleUrls: ['./sorting-table.component.css']
})
export class SortingTableComponent implements AfterViewInit {
  
   displayedColumns: string[] = ['id', 'name', 'progress'];
  dataSource = new MatTableDataSource<UserData>(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // constructor() { }

  // ngOnInit(): void {
  // }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
  const ELEMENT_DATA: UserData[] = [
    { id: '1', name: 'John', progress: '30%' },
    { id: '2', name: 'Doe', progress: '70%' },
    { id: '3', name: 'Jane', progress: '50%' },
    { id: '4', name: 'Smith', progress: '90%' },
    { id: '1', name: 'John', progress: '30%' },
    { id: '2', name: 'Doe', progress: '70%' },
    { id: '3', name: 'Jane', progress: '50%' },
    { id: '4', name: 'Smith', progress: '90%' },
    { id: '1', name: 'John', progress: '30%' },
    { id: '2', name: 'Doe', progress: '70%' },
    { id: '3', name: 'Jane', progress: '50%' },
    { id: '4', name: 'Smith', progress: '90%' },
  ];

