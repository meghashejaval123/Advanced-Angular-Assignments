import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDemoCompComponent } from './my-demo-comp.component';

describe('MyDemoCompComponent', () => {
  let component: MyDemoCompComponent;
  let fixture: ComponentFixture<MyDemoCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyDemoCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyDemoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
