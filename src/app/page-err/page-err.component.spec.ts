import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageErrComponent } from './page-err.component';

describe('PageErrComponent', () => {
  let component: PageErrComponent;
  let fixture: ComponentFixture<PageErrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageErrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageErrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
