import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpRecordsComponent } from './emp-records.component';

describe('EmpRecordsComponent', () => {
  let component: EmpRecordsComponent;
  let fixture: ComponentFixture<EmpRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
