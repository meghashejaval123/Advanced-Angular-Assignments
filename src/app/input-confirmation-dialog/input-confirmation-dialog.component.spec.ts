import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputConfirmationDialogComponent } from './input-confirmation-dialog.component';

describe('InputConfirmationDialogComponent', () => {
  let component: InputConfirmationDialogComponent;
  let fixture: ComponentFixture<InputConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputConfirmationDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
