import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventActionButtonComponent } from './event-action-button.component';

describe('EventActionButtonComponent', () => {
  let component: EventActionButtonComponent;
  let fixture: ComponentFixture<EventActionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventActionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
