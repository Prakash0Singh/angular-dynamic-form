import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesExampComponent } from './pipes-examp.component';

describe('PipesExampComponent', () => {
  let component: PipesExampComponent;
  let fixture: ComponentFixture<PipesExampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesExampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesExampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
