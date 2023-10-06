import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingCompComponent } from './sibling-comp.component';

describe('SiblingCompComponent', () => {
  let component: SiblingCompComponent;
  let fixture: ComponentFixture<SiblingCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
