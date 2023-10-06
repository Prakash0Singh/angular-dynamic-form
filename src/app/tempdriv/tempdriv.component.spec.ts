import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempdrivComponent } from './tempdriv.component';

describe('TempdrivComponent', () => {
  let component: TempdrivComponent;
  let fixture: ComponentFixture<TempdrivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempdrivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempdrivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
