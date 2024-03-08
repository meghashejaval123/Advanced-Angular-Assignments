import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent  {
  myControl = new FormControl();
  options: { group: string; values: string[] }[] = [
    { group: 'Group 1', values: ['One', 'Two', 'Three'] },
    { group: 'Group 2', values: ['Four', 'Five', 'Six'] },
    // Add more groups as needed
  ];
  filteredOptions: Observable<{ group: string; values: string[] }[]>;


  constructor() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
   }

   ngOnInit(): void {
  }
  private _filter(value: string): { group: string; values: string[] }[] {
    const filterValue = value.toLowerCase();

    const filteredOptions = this.options.map((group) => ({
      group: group.group,
      values: group.values.filter((option) => option.toLowerCase().includes(filterValue)),
    }));

    // Log the selected option to the console
    this.myControl.valueChanges.subscribe((selectedOption) => {
      console.log('Selected Option:', selectedOption);
    });

    return filteredOptions;
  }

 

}
