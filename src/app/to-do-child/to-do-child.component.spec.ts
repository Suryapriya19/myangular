import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoChildComponent } from './to-do-child.component';

describe('ToDoChildComponent', () => {
  let component: ToDoChildComponent;
  let fixture: ComponentFixture<ToDoChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
