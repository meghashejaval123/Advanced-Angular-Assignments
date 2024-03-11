import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSort } from '@angular/material/sort';


export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}
const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', description: 'Hydrogen is a chemical element with symbol H and atomic number 1.' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', description: 'Helium is a chemical element with symbol He and atomic number 2.' },
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'M', description: 'Hydrogen is a chemical element with symbol H and atomic number 1.' },
  { position: 2, name: 'Helium', weight: 5.0987, symbol: 'MS', description: 'Helium is a chemical element with symbol He and atomic number 2.' },

];

@Component({
  selector: 'app-expandable-table',
  templateUrl: './expandable-table.component.html',
  styleUrls: ['./expandable-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ExpandableTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  expandedElement: Element | null = null; // Add this line


  @ViewChild(MatSort, { static: true }) sort!: MatSort;


  constructor() { }

  ngOnInit() {
    this.dataSource.filterPredicate = (data, filter: string) => {
      return (
        data.name.toLowerCase().includes(filter) ||
        data.symbol.toLowerCase().includes(filter) ||
        data.description.toLowerCase().includes(filter)
      );
    };
  }


  applyFilter(event: any) {
    const filterValue = (event?.target?.value || '').trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }


  toggleRow(element: Element) {
    this.expandedElement = this.expandedElement === element ? null : element;
  }


}