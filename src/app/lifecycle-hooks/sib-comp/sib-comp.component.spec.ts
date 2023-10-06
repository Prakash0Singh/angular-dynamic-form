import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SibCompComponent } from './sib-comp.component';

describe('SibCompComponent', () => {
  let component: SibCompComponent;
  let fixture: ComponentFixture<SibCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SibCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SibCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
