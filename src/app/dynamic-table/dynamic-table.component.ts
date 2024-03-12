import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent {
  tableData: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  addItem() {
    const newItem = `Item ${this.tableData.length + 1}`;
    this.tableData.push(newItem);
  }

  removeItem(index: number) {
    this.tableData.splice(index, 1);
  }

  shuffleItems() {
    for (let i = this.tableData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.tableData[i], this.tableData[j]] = [this.tableData[j], this.tableData[i]];
    }
  }
}
