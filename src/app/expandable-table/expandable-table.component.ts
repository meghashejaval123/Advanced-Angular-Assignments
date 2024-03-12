import { Component } from '@angular/core';

interface TableRow {
  name: string;
  age: number;
  expanded?: boolean; // Add the 'expanded' property with an optional boolean type
}

@Component({
  selector: 'app-expandable-table',
  templateUrl: './expandable-table.component.html',
  styleUrls: ['./expandable-table.component.css']
})
export class ExpandableTableComponent {
  tableData: TableRow[] = [
    { name: 'John Doe', age: 25 },
    { name: 'Jane Doe', age: 30 },
    { name: 'Alice Smith', age: 22 },
    // Add more data as needed
  ];

  filteredData: TableRow[] = [...this.tableData];
  searchTerm: string = '';

  toggleRow(index: number): void {
    // Make sure the 'expanded' property exists before toggling
    if (this.tableData[index].hasOwnProperty('expanded')) {
      this.tableData[index]['expanded'] = !this.tableData[index]['expanded'];
    } else {
      this.tableData[index]['expanded'] = true;
    }
  }

  applyFilter(): void {
    this.filteredData = this.tableData.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
