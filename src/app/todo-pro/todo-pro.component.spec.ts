import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoProComponent } from './todo-pro.component';

describe('TodoProComponent', () => {
  let component: TodoProComponent;
  let fixture: ComponentFixture<TodoProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
