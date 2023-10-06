import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TskComponent } from './tsk.component';

describe('TskComponent', () => {
  let component: TskComponent;
  let fixture: ComponentFixture<TskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
