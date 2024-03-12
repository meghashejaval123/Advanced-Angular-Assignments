import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

interface OptionGroup {
  name: string;
  options: string[];
}

@Component({
  selector: 'app-autocomplete-demo',
  templateUrl: './autocomplete-demo.component.html',
  styleUrls: ['./autocomplete-demo.component.css']
})
export class AutocompleteDemoComponent {
  myControl = new FormControl();
  optionGroups: OptionGroup[] = [
    { name: 'Group 1', options: ['Angular', 'JavaScript', 'TypeScript'] },
    { name: 'Group 2', options: ['Linux', 'Database', 'Software Testing'] },
   
  ];
  filteredOptions: Observable<OptionGroup[]>;

  constructor() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): OptionGroup[] {
    const filterValue = value.toLowerCase();

    return this.optionGroups
      .map(group => ({
        ...group,
        options: group.options.filter(option => option.toLowerCase().includes(filterValue))
      }))
      .filter(group => group.options.length > 0);
  }

  optionSelected(event: MatAutocompleteSelectedEvent): void {
    console.log('Selected option:', event.option.viewValue);
  }
}

