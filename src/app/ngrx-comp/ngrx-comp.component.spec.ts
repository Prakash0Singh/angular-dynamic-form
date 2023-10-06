import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxCompComponent } from './ngrx-comp.component';

describe('NgrxCompComponent', () => {
  let component: NgrxCompComponent;
  let fixture: ComponentFixture<NgrxCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
