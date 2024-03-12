import { AfterViewInit, Component,OnInit,ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.css'],
})
export class TableDemoComponent implements OnInit {


  dataSource = [
    { position: 1, name: 'John Doe', age: 30 },
    { position: 2, name: 'Jane Doe', age: 25 },
    { position: 3, name: 'Jane Doe', age: 25 },
    { position: 4, name: 'Jane Doe', age: 25 },
    { position: 5, name: 'Jane Doe', age: 25 },
    
  ];

  displayedColumns: string[] = ['position', 'name', 'age'];
  ngOnInit(): void {
  }
}

