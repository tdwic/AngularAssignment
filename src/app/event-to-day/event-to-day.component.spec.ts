import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventToDayComponent } from './event-to-day.component';

describe('EventToDayComponent', () => {
  let component: EventToDayComponent;
  let fixture: ComponentFixture<EventToDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventToDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventToDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
