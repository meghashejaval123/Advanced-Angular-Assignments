import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Bulletin } from '../bulletin'

@Component({
  selector: 'app-change-detect',
  templateUrl: './change-detect.component.html',
  styleUrls: ['./change-detect.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class ChangeDetectComponent implements OnInit {
  // bulletin!: Bulletin;
  @Input() bulletin!: Bulletin;

  constructor(private cdr: ChangeDetectorRef) {}


  ngOnInit(): void {
    const specificDate = new Date();
    this.bulletin = new Bulletin('Angular News', specificDate.toISOString());

  }

 

changeDetectionOnPush() {
  this.bulletin.news_title = 'Updated Title 1';
  console.log("hi");
  this.cdr.detectChanges();

  setTimeout(() => {
    this.bulletin.news_title = 'Updated Title 2';
    this.cdr.detectChanges();
  }, 1000);

  setTimeout(() => {
    this.bulletin.news_title = 'Updated Title 3';
    this.cdr.detectChanges();
  }, 2000);

}


  changeDetectionDefault() {
    // No need to manually trigger change detection for Default strategy
    // Angular will automatically detect changes
    this.bulletin.news_title = 'Angular News';
  }
}
