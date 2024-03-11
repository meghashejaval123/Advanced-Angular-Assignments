import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';


@Component({
  selector: 'app-autocomplete-demo',
  templateUrl: './autocomplete-demo.component.html',
  styleUrls: ['./autocomplete-demo.component.css'],
})
export class AutocompleteDemoComponent {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;

  constructor() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  
    this.filteredOptions.subscribe(options => console.log(options)); 
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    const filteredOptions = this.options.filter((option) => option.toLowerCase().includes(filterValue));
    console.log(filteredOptions);
    return filteredOptions;
  }

  
  selectFirstOption() {
    const option = this.matAutocomplete.options.first;
    if (option) {
      this.myControl.setValue(option.value);  
    }
  }

}
