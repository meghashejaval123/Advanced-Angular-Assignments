import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerByTplFrmComponent } from './add-customer-by-tpl-frm.component';

describe('AddCustomerByTplFrmComponent', () => {
  let component: AddCustomerByTplFrmComponent;
  let fixture: ComponentFixture<AddCustomerByTplFrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomerByTplFrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerByTplFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
