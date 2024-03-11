import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit {
  chipControl = new FormControl();
  allChips: string[] = ['Angular', 'React', 'Vue', 'Node.js', 'Express', 'MongoDB'];
  separatorKeysCodes: number[] = [13, 188];

  selectedChips: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }



  addChip(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.selectedChips.push(value);
    }

    // Clear the input
    event.chipInput!.clear();
  }



  removeChip(chip: string): void {
    const index = this.selectedChips.indexOf(chip);
    if (index >= 0) {
      this.selectedChips.splice(index, 1);
    }
  }
}

